import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'

function formatNumber(n) {
	if (typeof n !== 'number') return n
	if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
	if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K'
	return String(n)
}

function KpiCard({ label, value, delta, suffix }) {
	const positive = typeof delta === 'number' ? delta >= 0 : true
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<span className="text-sm font-medium text-muted-foreground">{label}</span>
				<Badge variant={positive ? "default" : "destructive"} className="text-xs">
					{positive ? '▲' : '▼'} {Math.abs(delta ?? 0)}%
				</Badge>
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">{formatNumber(value)}{suffix ? suffix : ''}</div>
			</CardContent>
		</Card>
	)
}

export default KpiCard


