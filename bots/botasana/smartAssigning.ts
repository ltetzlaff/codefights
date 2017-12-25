function smartAssigning(names: string[], statuses: boolean[], projects: number[], tasks: number[]): string {
  const devs = names.map((_, i) => ({ 
    name: names[i],
    status: statuses[i],
    projects: projects[i],
    tasks: tasks[i]
  }))
  
  const availableDevs = devs.filter(d => !d.status)
  let minDev = availableDevs[0]
  for (const dev of availableDevs) {
    if (dev.tasks < minDev.tasks) {
      minDev = dev
      continue
    } else if (dev.tasks === minDev.tasks) {
      if (dev.projects < minDev.projects) {
        minDev = dev
        continue
      }
    }
  }
  return minDev.name
}
