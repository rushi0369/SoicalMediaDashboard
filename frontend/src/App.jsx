import Sidebar from './Sidebar'
import KpiCard from './components/KpiCard'
import { kpiCards } from './data'
import { GrowthLine, EngagementPie, FollowersBar } from './components/Charts'
import { growthSeries, engagementBreakdown, followersByPlatform } from './data'

function App() {
  return (
    <div className="dark">
      <div className="grid grid-cols-1 lg:grid-cols-[256px_1fr] min-h-screen bg-background text-foreground">
        <Sidebar />
        <main className="flex flex-col p-4 lg:p-6">
          <header className="flex justify-between items-end mb-5">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">Social Media Dashboard</h1>
              <p className="text-muted-foreground mt-1">Followers, likes, engagement, and growth overview</p>
            </div>
          </header>
          <section id="overview" className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {kpiCards.map((k) => (
                <KpiCard key={k.id} {...k} />
              ))}
            </div>
          </section>
          <section className="mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div id="growth">
                <GrowthLine data={growthSeries} />
              </div>
              <div id="engagement">
                <EngagementPie data={engagementBreakdown} />
              </div>
              <div id="followers" className="lg:col-span-2">
                <FollowersBar data={followersByPlatform} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
