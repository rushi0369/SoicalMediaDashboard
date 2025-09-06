import {
	ResponsiveContainer,
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	BarChart,
	Bar,
	PieChart,
	Pie,
	Cell,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const COLORS = ['#60a5fa', '#22d3ee', '#f472b6', '#f59e0b']

export function GrowthLine({ data }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Monthly Growth</CardTitle>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width="100%" height={260}>
					<LineChart data={data} margin={{ top: 10, right: 8, left: 0, bottom: 0 }}>
						<CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
						<XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
						<YAxis stroke="hsl(var(--muted-foreground))" />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	)
}

export function EngagementPie({ data }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Engagement Breakdown</CardTitle>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width="100%" height={260}>
					<PieChart>
						<Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip />
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	)
}

export function FollowersBar({ data }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Followers by Platform</CardTitle>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width="100%" height={260}>
					<BarChart data={data} margin={{ top: 10, right: 8, left: 0, bottom: 0 }}>
						<CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
						<XAxis dataKey="platform" stroke="hsl(var(--muted-foreground))" />
						<YAxis stroke="hsl(var(--muted-foreground))" />
						<Tooltip />
						<Legend />
						<Bar dataKey="followers" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
					</BarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	)
}

export default { GrowthLine, EngagementPie, FollowersBar }


