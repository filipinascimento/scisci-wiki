# Journal fitness distribution

## Summary

Journal fitness distribution is the distribution of fitted paper-fitness values within a journal cohort, used to summarize the latent long-term-impact composition of the journal's published papers.

## Canonical Form

- Unit of analysis: journal, paper cohort, fitted fitness value, or impact-factor comparison.
- Typical representation: distribution of paper fitness, `P(lambda)`, cohort density, or journal impact composition.
- Measurement target: the mix of durable paper-level impact potential inside a journal.
- Empirical signature: journals with similar short-window impact can differ in the distribution of fitted paper fitness values.

## Uses in Science of Science

- Aggregates [paper fitness](paper_fitness.md) at the journal-cohort level.
- Supports [equal-fitness citation convergence](../validations/equal_fitness_citation_convergence.md).
- Helps interpret [journal impact-time shift](../validations/journal_impact_time_shift.md).
- Works with [journal-level citation parameterization](../representations/journal_level_citation_parameterization.md).

## Operationalization

- Fit citation trajectories for papers in a journal cohort.
- Extract paper-level relative fitness values.
- Estimate and compare the cohort-level fitness distribution.
- Relate the distribution to impact factor, immediacy, and longevity changes.

## Evidence and Validations

- Verified full-text evidence from Wang et al. (2013) estimates journal-specific paper-fitness distributions for Physical Review B, PNAS, and Cell.
- The same paper interprets Cell and NEJM shifts through changes in fitness and immediacy distributions.
- Figure captions explicitly define fitness distributions for journal cohorts.

## Caveats

- Fitness estimates depend on the citation model and observation window.
- Journal fitness distributions can be affected by field mix, article type, and editorial strategy.
- Distribution summaries should not be reduced to a single journal score without uncertainty.

## Links

- [paper fitness](paper_fitness.md)
- [equal-fitness citation convergence](../validations/equal_fitness_citation_convergence.md)
- [journal impact-time shift](../validations/journal_impact_time_shift.md)
- [journal-level citation parameterization](../representations/journal_level_citation_parameterization.md)
- [impact-factor citation-window share](impact_factor_citation_window_share.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; SciSciNet: W2124689612; WoS: unknown]

## Metadata

- Concept ID: `journal_fitness_distribution`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: journal paper-fitness distribution; cohort fitness density; journal latent impact composition
