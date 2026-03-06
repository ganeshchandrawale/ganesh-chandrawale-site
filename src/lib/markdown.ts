export function parseMarkdown(content: string): string {
  let html = content.trim()
  
  // Convert headers
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>')
  
  // Convert bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  
  // Convert italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')
  
  // Convert horizontal rules
  html = html.replace(/^---$/gm, '<hr />')
  
  // Split into blocks
  const blocks = html.split('\n\n')
  
  const processedBlocks = blocks.map(block => {
    // Skip if already HTML
    if (block.startsWith('<h2>') || block.startsWith('<hr')) {
      return block
    }
    
    // Handle lists
    if (block.includes('\n- ')) {
      const items = block
        .split('\n')
        .filter(line => line.trim().startsWith('- '))
        .map(line => `<li>${line.trim().substring(2)}</li>`)
        .join('\n')
      return `<ul>\n${items}\n</ul>`
    }
    
    // Handle numbered lists
    if (/^\d+\.\s/.test(block)) {
      const items = block
        .split('\n')
        .filter(line => /^\d+\.\s/.test(line.trim()))
        .map(line => `<li>${line.trim().replace(/^\d+\.\s+/, '')}</li>`)
        .join('\n')
      return `<ol>\n${items}\n</ol>`
    }
    
    // Regular paragraph
    return `<p>${block}</p>`
  })
  
  return processedBlocks.join('\n')
}
