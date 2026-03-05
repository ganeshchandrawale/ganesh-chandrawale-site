---
title: "I completed an architectural audit in 60 minutes using Amazon Kiro"
date: "2026-02-25"
excerpt: "AI architectural audits used to take days. Here's the exact chain-prompting method I used with Amazon Kiro, GitHub and MCP to do one in under an hour."
readTime: "5 min read"
linkedinPost: true
category: ai-insights
---

As architects we often wonder: can AI actually audit my designs and add value, or is it just good for generating boilerplate?

I just finished an architectural audit that used to take days. It took less than 60 minutes.

Here's exactly how.

## The strategy: chain prompting beats single prompts

You can't get an executive-level audit in one go. I used a structured chain to maintain context and depth across four steps.

**Step 1 — Contextual Intake:** Ingested the high-level design from Confluence via MCP to establish the source of truth.

**Step 2 — Implementation Mapping:** Pointed Kiro to the GitHub repo to identify deviations between design and code — detecting architectural drift before it becomes a problem.

**Step 3 — Gap Analysis:** Formulated a reasoning chain to categorise risks into three buckets: security, scalability, and maintainability.

**Step 4 — Actionability:** Synthesised findings into an executive summary and transformed technical debt items into structured JIRA tickets, ready to be prioritised.

## The tech stack: why MCP is the game changer

The Model Context Protocol (MCP) is what makes this possible at speed. By connecting Kiro to Confluence, JIRA, and GitHub, I eliminated the "copy-paste tax" completely. The AI isn't guessing from a description I've written — it's querying live data from the actual systems.

> 💡 **Top tip:** Make sure to explicitly tell Kiro to investigate "child pages" in Confluence — it doesn't do this by default, and that's where a lot of the detail lives.

## The result

- **Architectural compliance:** Verified ✅
- **Technical debt:** Categorised and logged in JIRA ✅
- **Human effort:** Under 1 hour ✅

## The right lens

The hesitation many architects feel comes from trying to use AI for *writing*. That's the wrong lens.

Use it for **governance and verification**. When you connect your reasoning engine (Kiro) to your live environment (MCP), you aren't just "using AI" — you're automating the most tedious parts of architectural oversight and freeing yourself up for the work that actually requires human judgment.

If you're still auditing manually, you're leaving hours of high-level strategy on the table every single week.

The biggest blocker I hear from people is either security concerns about giving AI access to live repos, or cultural resistance from teams not ready to trust AI outputs. Both are valid — but both are solvable. What's your biggest blocker?
