# Citation immediacy parameter

## Summary

The citation immediacy parameter measures how quickly a paper reaches its citation peak or accumulates the bulk of its lifetime citations in a fitted citation-history model.

## Canonical Form

- Unit of analysis: paper, citation trajectory, journal cohort, or field-year cohort.
- Typical representation: immediacy parameter mu, impact-time estimate, citation-peak timing, or time-to-bulk-citations.
- Mechanism or measurement target: early uptake speed, citation tempo, and short-term attention timing.
- Empirical signature: papers with similar long-run impact can have different early citation paths because their immediacy parameters differ.

## Uses in Science of Science

- Splits the timing component out of [citation trajectory models](../methods/citation_trajectory_models.md).
- Helps distinguish early-attention speed from [paper fitness](paper_fitness.md) and [ultimate citation impact](ultimate_citation_impact.md).
- Provides the paper-level timing parameter behind [journal impact-time shift](../validations/journal_impact_time_shift.md).
- Connects [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md) to measurable paper-level life-cycle parameters.
- Provides a bridge to [sleeping beauty](../mechanisms/sleeping_beauty.md), where delayed attention can be interpreted partly through low immediacy or unusual life-cycle shape.

## Operationalization

- Fit a citation-history model with paper-specific relative fitness, immediacy, and longevity parameters.
- Interpret the immediacy parameter as governing the time scale for reaching the citation peak or characteristic impact time.
- Compare immediacy across fields, journals, teams, topics, and publication cohorts after accounting for database coverage and citation-window length.
- Avoid using short-window citation counts as a proxy for long-term impact without checking immediacy and fitness separately.

## Evidence and Validations

- Verified full-text evidence from Wang, Song, and Barabasi (2013) defines a citation-history model with three paper-specific parameters: relative fitness, immediacy, and longevity.
- The paper states that immediacy governs the time for a paper to reach its citation peak.
- Wang et al. derive an impact-time measure that is mainly determined by the immediacy parameter and is independent of relative fitness and decay rate.
- The paper also shows that journals or papers can have different early citation paths even when long-run impact converges for comparable fitness.
- The journal-level extension is split out in [journal impact-time shift](../validations/journal_impact_time_shift.md), where changes in citation timing explain changes in two-year impact factor.

## Caveats

- Immediacy estimates depend on the model form and early citation data quality.
- Fast citation uptake is not the same as lasting impact or epistemic value.
- Some delayed-recognition cases and exogenous citation shocks can violate a simple fitted life-cycle interpretation.

## Links

- [citation trajectory models](../methods/citation_trajectory_models.md)
- [paper fitness](paper_fitness.md)
- [citation longevity parameter](citation_longevity_parameter.md)
- [ultimate citation impact](ultimate_citation_impact.md)
- [journal impact-time shift](../validations/journal_impact_time_shift.md)
- [long-term citation prediction](../methods/long_term_citation_prediction.md)
- [universal citation-history rescaling](../validations/universal_citation_history_rescaling.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [citation impact indicators](citation_impact_indicators.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]

## Metadata

- Concept ID: `citation_immediacy_parameter`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: citation immediacy; impact time parameter; citation peak timing; mu parameter
