# Patent importance measure divergence

## Summary

Patent importance measure divergence tests whether forward citation impact and disruption scores identify different dimensions of technological importance.

## Canonical Form

- Unit of analysis: patent, patent-level covariate, impact score, CD score, mCD score, or regression comparison.
- Typical representation: side-by-side models of forward citations, `CDt`, and `mCDt` with shared predictors.
- Validation target: show that disruption metrics are not merely citation-volume proxies.
- Empirical signature: predictors can have different signs or meanings across impact, disruption, and impact-weighted disruption models.

## Uses in Science of Science

- Validates [disruption index](../measures/disruption_index.md) by comparing it with conventional [citation impact indicators](../measures/citation_impact_indicators.md).
- Provides patent-level evidence for [impact direction-magnitude decoupling](impact_direction_magnitude_decoupling.md).
- Supports [responsible metrics](../measures/responsible_metrics.md) by making metric construct differences explicit.
- Helps interpret why high-impact work can either consolidate or destabilize existing technology streams.
- Provides a regression-template for testing whether a new metric adds information beyond citation counts.

## Operationalization

- Estimate comparable models for forward citation impact, `CDt`, and `mCDt`.
- Include patent, assignee, inventor-team, examiner, technology-class, and time controls where relevant.
- Compare coefficient signs, magnitudes, and interpretation across outcome measures.
- Report the correlation between disruption scores and impact before treating them as distinct constructs.

## Evidence and Validations

- Verified full-text evidence from Funk and Owen-Smith (2017) reports that `CD5` is only modestly correlated with five-year impact in their patent sample.
- Their patent-level regressions show that government-interest patents have positive associations with `CD5` and `mCD5`, while impact models do not show the same pattern.
- Predecessor patent citations are positively associated with impact but negatively associated with `CD5` and `mCD5`.
- Firm and university assignee indicators have similar positive associations with impact, but firms are more consolidating and universities more destabilizing in the CD-index models.

## Caveats

- Divergence between metrics does not automatically make one metric superior; it means they answer different questions.
- Regression signs can depend on controls, citation window, patent cohort, and technology-class coverage.
- `mCDt` deliberately mixes direction and volume, so it should be interpreted between pure disruption and pure impact.

## Links

- [disruption index](../measures/disruption_index.md)
- [modified CD index](../measures/modified_cd_index.md)
- [impact direction-magnitude decoupling](impact_direction_magnitude_decoupling.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [disruption measure validation](disruption_measure_validation.md)
- [federal funding destabilizing patents](../mechanisms/federal_funding_destabilizing_patents.md)
- [commercial engagement consolidation](../mechanisms/commercial_engagement_consolidation.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; WoS: unknown; SciSciNet: W2303284028]

## Metadata

- Concept ID: `patent_importance_measure_divergence`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Funk and Owen-Smith (2017) (2017)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Dimensions ID: `pub.1064718099`
- SciSciNet ID: `W2303284028`
- Aliases: impact-disruption divergence; patent metric divergence; CD versus forward citations; citation impact versus disruption
