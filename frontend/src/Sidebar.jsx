import { Home, BarChart3, PieChart, LineChart, Settings } from 'lucide-react'
import { Button } from './components/ui/button'
import { Separator } from './components/ui/separator'

function Sidebar() {
	return (
		<aside className="lg:sticky lg:top-0 h-auto lg:h-screen w-full lg:w-64 bg-card lg:border-r border-border flex flex-col">
			{/* Header */}
			<div className="p-4 lg:p-6 border-b border-border">
				<h1 className="text-lg lg:text-xl font-bold text-foreground">SocialDash</h1>
				<p className="text-xs lg:text-sm text-muted-foreground mt-1">Analytics Dashboard</p>
			</div>
			
			{/* Navigation */}
			<nav className="flex-1 p-3 lg:p-4 space-y-1 lg:space-y-2">
				<div className="space-y-1">
					<h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 lg:px-3 mb-2">
						Overview
					</h2>
					<Button 
						variant="ghost" 
						className="w-full justify-start gap-3 h-9 lg:h-10 px-2 lg:px-3 text-sm font-medium bg-accent text-accent-foreground items-center" 
						asChild
					>
						<a href="#overview" className="flex items-center gap-3">
							<Home size={16} />
							<span>Dashboard</span>
						</a>
					</Button>
				</div>
				
				<Separator className="my-3 lg:my-4" />
				
				<div className="space-y-1">
					<h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 lg:px-3 mb-2">
						Analytics
					</h2>
					<Button 
						variant="ghost" 
						className="w-full justify-start gap-3 h-9 lg:h-10 px-2 lg:px-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground items-center" 
						asChild
					>
						<a href="#followers" className="flex items-center gap-3">
							<BarChart3 size={16} />
							<span>Followers</span>
						</a>
					</Button>
					<Button 
						variant="ghost" 
						className="w-full justify-start gap-3 h-9 lg:h-10 px-2 lg:px-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground items-center" 
						asChild
					>
						<a href="#engagement" className="flex items-center gap-3">
							<PieChart size={16} />
							<span>Engagement</span>
						</a>
					</Button>
					<Button 
						variant="ghost" 
						className="w-full justify-start gap-3 h-9 lg:h-10 px-2 lg:px-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground items-center" 
						asChild
					>
						<a href="#growth" className="flex items-center gap-3">
							<LineChart size={16} />
							<span>Growth</span>
						</a>
					</Button>
				</div>
			</nav>
			
			{/* Footer */}
			<div className="p-3 lg:p-4 border-t border-border">
				<Button 
					variant="outline" 
					className="w-full justify-start gap-3 h-9 lg:h-10 px-2 lg:px-3 text-sm font-medium items-center"
				>
					<Settings size={16} />
					<span>Settings</span>
				</Button>
			</div>
		</aside>
	)
}

export default Sidebar


