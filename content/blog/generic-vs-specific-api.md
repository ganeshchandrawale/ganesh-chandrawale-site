---
title: "The Architect's Tug-of-War: Generic API vs Specific API"
date: "2026-02-26"
excerpt: "When designing an API, do you build for what you know — or for what you can't yet predict? Here's how I think about one of architecture's most common dilemmas."
readTime: "4 min read"
linkedinPost: true
category: blog
---

A question I've wrestled with more times than I can count: when designing an API, do you build for what you *know* — or for what you *can't yet predict*?

We've all been at this fork in the road.

## Option 1: The Generic API (The Kitchen Sink) 🚰

You expose as many fields as possible to make it "future-proof."

**The case for it:** It serves a wide variety of consumers and ages well as needs evolve. It feels responsible, even visionary.

**The reality check:** You risk over-fetching, slower responses, and a massive "blast radius" for any subsequent change. Every field you expose is a contract you now have to honour — forever.

## Option 2: The Specific API (The Tasting Menu) 🍷

You keep it lean, focused, and built for the known consumer.

**The case for it:** Faster, cheaper to ship, and data exposure is tightly controlled. The consumer gets exactly what they need — nothing more.

**The reality check:** You might struggle to scale when a new, unexpected consumer type shows up.

## Where I land

"Future-proofing" is often just pre-allocating technical debt.

Unless I'm building a public-facing platform for thousands of unknown developers, I lean toward **Specific APIs** first. Here's the logic: it's much easier to *add* a field later than it is to *deprecate* one that's already being consumed by 50 different microservices.

Deprecation is painful. It requires versioning strategies, migration periods, consumer communications, and a whole lot of goodwill. Adding a field is a Tuesday afternoon.

Neither approach wins outright — **context does.**

The questions I ask before deciding:

- Who are my consumers, and how well do I know their needs?
- Is this an internal API or a public platform?
- How stable are the underlying data requirements?
- What's the cost of getting it wrong in each direction?

If the answers point toward known, stable, internal consumers — go specific. If you're genuinely building a platform for an unknowable audience — build wider, but do it deliberately, not just because it feels safer.

The worst outcome isn't building too narrow or too wide. It's building wide *by default*, without thinking it through.
