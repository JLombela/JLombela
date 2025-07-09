"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, MoreHorizontal, MapPin, Clock, Shield } from "lucide-react"

export default function AgentNetworkPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedAgent, setSelectedAgent] = useState(null)

  const agents = [
    {
      id: "G-078W",
      name: "VENGEFUL SPIRIT",
      status: "active",
      location: "Berlin",
      lastSeen: "2 min ago",
      missions: 47,
      risk: "high",
    },
    {
      id: "G-079X",
      name: "OBSIDIAN SENTINEL",
      status: "standby",
      location: "Tokyo",
      lastSeen: "15 min ago",
      missions: 32,
      risk: "medium",
    },
    {
      id: "G-080Y",
      name: "GHOSTLY FURY",
      status: "active",
      location: "Cairo",
      lastSeen: "1 min ago",
      missions: 63,
      risk: "high",
    },
    {
      id: "G-081Z",
      name: "CURSED REVENANT",
      status: "compromised",
      location: "Moscow",
      lastSeen: "3 hours ago",
      missions: 28,
      risk: "critical",
    },
    {
      id: "G-082A",
      name: "VENOMOUS SHADE",
      status: "active",
      location: "London",
      lastSeen: "5 min ago",
      missions: 41,
      risk: "medium",
    },
    {
      id: "G-083B",
      name: "MYSTIC ENIGMA",
      status: "training",
      location: "Base Alpha",
      lastSeen: "1 day ago",
      missions: 12,
      risk: "low",
    },
    {
      id: "G-084C",
      name: "WRAITH AVENGER",
      status: "active",
      location: "Paris",
      lastSeen: "8 min ago",
      missions: 55,
      risk: "high",
    },
    {
      id: "G-085D",
      name: "SPECTRAL FURY",
      status: "standby",
      location: "Sydney",
      lastSeen: "22 min ago",
      missions: 38,
      risk: "medium",
    },
  ]

  const filteredAgents = agents.filter(
    (agent) =>
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-wider font-mono">AGENT NETWORK</h1>
          <p className="text-sm text-muted-foreground">Manage and monitor field operatives</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-axalio-green hover:bg-axalio-green/90 text-black tracking-wider uppercase font-mono">
            DEPLOY AGENT
          </Button>
          <Button className="bg-axalio-green hover:bg-axalio-green/90 text-black tracking-wider uppercase font-mono">
            <Filter className="w-4 h-4 mr-2" />
            FILTER
          </Button>
        </div>
      </div>

      {/* Search and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="lg:col-span-1 bg-card border-border">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search agents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-muted border-border text-foreground placeholder-muted-foreground"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider font-mono">ACTIVE AGENTS</p>
                <p className="text-2xl font-bold text-foreground font-mono">847</p>
              </div>
              <Shield className="w-8 h-8 text-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider font-mono">COMPROMISED</p>
                <p className="text-2xl font-bold text-red-500 font-mono">3</p>
              </div>
              <Shield className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider font-mono">IN TRAINING</p>
                <p className="text-2xl font-bold text-axalio-green font-mono">23</p>
              </div>
              <Shield className="w-8 h-8 text-axalio-green" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Agent List */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-foreground tracking-wider font-mono">AGENT ROSTER</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    AGENT ID
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    CODENAME
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    STATUS
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    LOCATION
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    LAST SEEN
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    MISSIONS
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    RISK
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAgents.map((agent, index) => (
                  <tr
                    key={agent.id}
                    className={`border-b border-border hover:bg-accent transition-colors cursor-pointer ${
                      index % 2 === 0 ? "bg-card" : "bg-muted/20"
                    }`}
                    onClick={() => setSelectedAgent(agent)}
                  >
                    <td className="py-3 px-4 text-sm text-foreground font-mono">{agent.id}</td>
                    <td className="py-3 px-4 text-sm text-foreground">{agent.name}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            agent.status === "active"
                              ? "bg-foreground"
                              : agent.status === "standby"
                                ? "bg-muted-foreground"
                                : agent.status === "training"
                                  ? "bg-axalio-green"
                                  : "bg-red-500"
                          }`}
                        ></div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">{agent.status}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{agent.location}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground font-mono">{agent.lastSeen}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-foreground font-mono">{agent.missions}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`text-xs px-2 py-1 rounded uppercase tracking-wider ${
                          agent.risk === "critical"
                            ? "bg-red-500/20 text-red-500"
                            : agent.risk === "high"
                              ? "bg-axalio-green/20 text-axalio-green"
                              : agent.risk === "medium"
                                ? "bg-muted text-muted-foreground"
                                : "bg-foreground/20 text-foreground"
                        }`}
                      >
                        {agent.risk}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-axalio-green">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Agent Detail Modal */}
      {selectedAgent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-card border-border w-full max-w-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold text-foreground tracking-wider font-mono">
                  {selectedAgent.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground font-mono">{selectedAgent.id}</p>
              </div>
              <Button
                variant="ghost"
                onClick={() => setSelectedAgent(null)}
                className="text-muted-foreground hover:text-foreground tracking-wider uppercase"
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground tracking-wider mb-1 font-mono">STATUS</p>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        selectedAgent.status === "active"
                          ? "bg-foreground"
                          : selectedAgent.status === "standby"
                            ? "bg-muted-foreground"
                            : selectedAgent.status === "training"
                              ? "bg-axalio-green"
                              : "bg-red-500"
                      }`}
                    ></div>
                    <span className="text-sm text-foreground uppercase tracking-wider">{selectedAgent.status}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-wider mb-1 font-mono">LOCATION</p>
                  <p className="text-sm text-foreground">{selectedAgent.location}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-wider mb-1 font-mono">MISSIONS COMPLETED</p>
                  <p className="text-sm text-foreground font-mono">{selectedAgent.missions}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-wider mb-1 font-mono">RISK LEVEL</p>
                  <span
                    className={`text-xs px-2 py-1 rounded uppercase tracking-wider ${
                      selectedAgent.risk === "critical"
                        ? "bg-red-500/20 text-red-500"
                        : selectedAgent.risk === "high"
                          ? "bg-axalio-green/20 text-axalio-green"
                          : selectedAgent.risk === "medium"
                            ? "bg-muted text-muted-foreground"
                            : "bg-foreground/20 text-foreground"
                    }`}
                  >
                    {selectedAgent.risk}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="bg-axalio-green hover:bg-axalio-green/90 text-black tracking-wider uppercase font-mono">
                  ASSIGN MISSION
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground tracking-wider uppercase font-mono bg-transparent"
                >
                  VIEW HISTORY
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground tracking-wider uppercase font-mono bg-transparent"
                >
                  SEND MESSAGE
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
