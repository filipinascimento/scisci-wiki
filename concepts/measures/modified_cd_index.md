# Modified CD index

## Summary

The modified CD index, or mCDt, extends the CD index by combining the direction of disruption or consolidation with the magnitude of downstream attention to the focal work.

## Canonical Form

- Unit of analysis: focal patent, focal paper, citation window, future citation neighborhood, or technology stream.
- Typical representation: impact-weighted disruption score with longer tails than CDt.
- Measurement target: overall directional effect on a citation network, mixing disruption/consolidation direction with focal-work use.
- Empirical signature: works with similar CDt direction can differ sharply in mCDt when one receives much more downstream attention.

## Uses in Science of Science

- Complements [disruption index](disruption_index.md) by adding magnitude to the direction of disruption or consolidation.
- Helps separate low-attention disruptive works from high-attention disruptive works in [disruption measure validation](../validations/disruption_measure_validation.md).
- Provides a bridge between structural disruption and [citation impact indicators](citation_impact_indicators.md).

## Operationalization

- Compute the underlying CDt terms from [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md).
- Count focal-work downstream use within the chosen [CD-index time window](cd_index_time_windows.md).
- Multiply or scale the directional CDt expression by the focal-work use parameter specified by the implementation.
- Report mCDt alongside CDt because the two answer different questions.

## Evidence and Validations

- Verified full-text evidence from Funk and Owen-Smith (2017) defines mCDt as a variant of CDt that incorporates a magnitude-of-use parameter for the focal invention.
- The paper distinguishes the two measures directly: CDt captures the direction of an invention's effects, while mCDt mixes both direction and magnitude, making it a direct example of [impact direction-magnitude decoupling](../validations/impact_direction_magnitude_decoupling.md).
- In their patent corpus, Funk and Owen-Smith report that mCD5 has a similar mode to CD5 but much longer tails, reflecting the impact-weighted nature of the measure.
- The paper also shows that CD5 and mCD5 are related but not redundant, reporting a positive correlation between the two.
- Funk and Owen-Smith use mCD5 in [university patent portfolio disruption](university_patent_portfolio_disruption.md), where impact scaling is more informative than average CD5 for diverse institutional portfolios.
- Their robustness and regression evidence links mCD5 to [CD-index undefined cases](../validations/cd_index_undefined_cases.md) and [patent importance measure divergence](../validations/patent_importance_measure_divergence.md).

## Caveats

- mCDt partially reintroduces citation-volume effects, so it should not be interpreted as pure disruption.
- The score can be dominated by highly cited focal works and may obscure low-citation but structurally disruptive cases.
- Comparisons across fields and cohorts still require citation-window and coverage sensitivity checks.

## Links

- [disruption index](disruption_index.md)
- [university patent portfolio disruption](university_patent_portfolio_disruption.md)
- [CD-index time windows](cd_index_time_windows.md)
- [continuous disruption-consolidation scale](../methods/continuous_disruption_consolidation_scale.md)
- [impact direction-magnitude decoupling](../validations/impact_direction_magnitude_decoupling.md)
- [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md)
- [disruption and consolidation](../mechanisms/disruption_consolidation.md)
- [CD-index undefined cases](../validations/cd_index_undefined_cases.md)
- [patent importance measure divergence](../validations/patent_importance_measure_divergence.md)
- [citation impact indicators](citation_impact_indicators.md)
- [responsible metrics](responsible_metrics.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; WoS: unknown]

## Metadata

- Concept ID: `modified_cd_index`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Funk and Owen-Smith (2017) (2017)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Dimensions ID: `pub.1064718099`
- SciSciNet ID: `W2303284028`
- Aliases: mCDt; mCD5; impact-weighted disruption index; magnitude-weighted CD index
