import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { AlertTriangle, Clock, CheckCircle, User, Calendar } from "lucide-react";

interface Incident {
  id: string;
  title: string;
  severity: "critical" | "high" | "medium" | "low";
  status: "open" | "investigating" | "resolved" | "closed";
  assignee: string;
  created: string;
  lastUpdate: string;
  description: string;
  category: string;
}

const incidents: Incident[] = [
  {
    id: "INC-2024-001",
    title: "Data Breach Attempt Detected",
    severity: "critical",
    status: "investigating",
    assignee: "Sarah Johnson",
    created: "2024-01-15 14:30",
    lastUpdate: "2024-01-15 16:45",
    description: "Suspicious data access patterns detected on customer database",
    category: "Data Security"
  },
  {
    id: "INC-2024-002",
    title: "DDoS Attack on Web Services",
    severity: "high",
    status: "open",
    assignee: "Mike Chen",
    created: "2024-01-15 13:15",
    lastUpdate: "2024-01-15 13:20",
    description: "High volume of requests causing service degradation",
    category: "Network Security"
  },
  {
    id: "INC-2024-003",
    title: "Malware Detection on Workstation",
    severity: "medium",
    status: "resolved",
    assignee: "Alex Rodriguez",
    created: "2024-01-14 09:45",
    lastUpdate: "2024-01-14 15:30",
    description: "Trojan horse detected and quarantined on user workstation",
    category: "Endpoint Security"
  },
  {
    id: "INC-2024-004",
    title: "Phishing Email Campaign",
    severity: "medium",
    status: "closed",
    assignee: "Emma Wilson",
    created: "2024-01-13 11:20",
    lastUpdate: "2024-01-13 17:00",
    description: "Mass phishing emails targeting company employees",
    category: "Email Security"
  }
];

const playbook = [
  {
    phase: "Detection & Analysis",
    steps: [
      "Identify and validate the security incident",
      "Determine the scope and impact",
      "Classify the incident severity",
      "Notify the incident response team"
    ]
  },
  {
    phase: "Containment",
    steps: [
      "Isolate affected systems",
      "Preserve evidence for forensic analysis",
      "Implement temporary fixes",
      "Document all actions taken"
    ]
  },
  {
    phase: "Eradication & Recovery",
    steps: [
      "Remove the cause of the incident",
      "Apply security patches and updates",
      "Restore systems from clean backups",
      "Monitor for signs of re-infection"
    ]
  },
  {
    phase: "Post-Incident",
    steps: [
      "Conduct lessons learned session",
      "Update security controls",
      "Improve incident response procedures",
      "Prepare final incident report"
    ]
  }
];

const getSeverityColor = (severity: Incident["severity"]) => {
  switch (severity) {
    case "critical": return "text-red-600 bg-red-100";
    case "high": return "text-orange-600 bg-orange-100";
    case "medium": return "text-yellow-600 bg-yellow-100";
    case "low": return "text-green-600 bg-green-100";
  }
};

const getStatusColor = (status: Incident["status"]) => {
  switch (status) {
    case "open": return "text-red-600 bg-red-100";
    case "investigating": return "text-blue-600 bg-blue-100";
    case "resolved": return "text-green-600 bg-green-100";
    case "closed": return "text-gray-600 bg-gray-100";
  }
};

const getStatusIcon = (status: Incident["status"]) => {
  switch (status) {
    case "open": return <AlertTriangle className="h-4 w-4" />;
    case "investigating": return <Clock className="h-4 w-4" />;
    case "resolved": return <CheckCircle className="h-4 w-4" />;
    case "closed": return <CheckCircle className="h-4 w-4" />;
  }
};

export function IncidentResponse() {
  const openIncidents = incidents.filter(i => i.status === "open" || i.status === "investigating").length;
  const resolvedToday = incidents.filter(i => i.status === "resolved" && i.lastUpdate.includes("2024-01-15")).length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            <div>
              <p className="text-sm text-muted-foreground">Open Incidents</p>
              <h3 className="text-2xl">{openIncidents}</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-sm text-muted-foreground">Resolved Today</p>
              <h3 className="text-2xl">{resolvedToday}</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <Clock className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-sm text-muted-foreground">Avg Response Time</p>
              <h3 className="text-2xl">24min</h3>
            </div>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="incidents" className="space-y-6">
        <TabsList>
          <TabsTrigger value="incidents">Active Incidents</TabsTrigger>
          <TabsTrigger value="playbook">Response Playbook</TabsTrigger>
        </TabsList>

        <TabsContent value="incidents">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3>Security Incidents</h3>
              <Button>
                <AlertTriangle className="h-4 w-4 mr-2" />
                Create Incident
              </Button>
            </div>

            <div className="space-y-4">
              {incidents.map((incident) => (
                <div key={incident.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {getStatusIcon(incident.status)}
                        <h4 className="font-medium">{incident.title}</h4>
                        <Badge className={getSeverityColor(incident.severity)}>
                          {incident.severity.toUpperCase()}
                        </Badge>
                        <Badge className={getStatusColor(incident.status)}>
                          {incident.status.toUpperCase()}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {incident.description}
                      </p>
                      
                      <div className="flex items-center gap-6 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <span>ID: {incident.id}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {incident.assignee}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Created: {incident.created}
                        </div>
                        <div>Category: {incident.category}</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      {(incident.status === "open" || incident.status === "investigating") && (
                        <Button size="sm">
                          Update Status
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="playbook">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {playbook.map((phase, index) => (
              <Card key={index} className="p-6">
                <h4 className="font-medium mb-4 text-blue-600">
                  Phase {index + 1}: {phase.phase}
                </h4>
                <ul className="space-y-2">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}