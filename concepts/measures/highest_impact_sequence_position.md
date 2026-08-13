# Highest-impact sequence position

## Summary

Highest-impact sequence position measures where a scientist's most-cited paper appears in career time or in the ordered sequence of their publications.

## Canonical Form

- Unit of analysis: scientist, publication sequence, highest-impact paper, career year, or publication order.
- Typical representation: `t*`, `N*`, or normalized sequence position `N*/N`.
- Measurement target: timing of the scientist's peak paper relative to productivity and career length.
- Empirical signature: the distribution of `N*/N` is flat when peak impact is equally likely at any publication order.

## Uses in Science of Science

- Turns the [random impact rule](../mechanisms/random_impact_rule.md) into a reusable measurable object.
- Complements [maximum-impact career strata](../representations/maximum_impact_career_strata.md), which group scientists by the magnitude rather than the position of the personal-best paper.
- Enables [within-career impact shuffle null](../validations/within_career_impact_shuffle_null.md) tests by comparing observed peak positions to shuffled paper-impact sequences.
- Provides a sequence-aware career measure for [scientific career impact dynamics](../mechanisms/scientific_career_impact.md), [Q-model career impact prediction](../methods/q_model_career_prediction.md), and [hot streaks](../mechanisms/hot_streaks.md).
- Helps distinguish apparent early-career peak timing from productivity-driven exposure.

## Operationalization

- Build a scientist's paper sequence sorted by publication date.
- Assign each paper an impact value, typically citations accumulated in a fixed window such as ten years.
- Identify the highest-impact paper and record its career year `t*`, sequence rank `N*`, and normalized position `N*/N`.
- Compare position distributions across fields, career lengths, publication cohorts, and authorship-credit rules.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) defines `t*`, `N*`, and `N` using examples such as Kenneth Wilson's publication sequence.
- The paper reports that `P(t*)` is high in the first 20 years, but that this pattern is explained by time-varying productivity rather than special impact timing.
- Sinatra et al. find that `P(N*/N)` is flat and that the cumulative distribution behaves consistently with a uniform peak position across publication order.
- This measure supports their conclusion that highest-impact work is randomly distributed within the scientist's body of work, regardless of publication time or order.

## Caveats

- The measure depends on the citation window and field normalization used to define the highest-impact paper.
- Ties and sparse publication records need explicit handling.
- A flat `N*/N` distribution does not imply identical expected impact across scientists; it only concerns the location of the personal-best paper.

## Links

- [random impact rule](../mechanisms/random_impact_rule.md)
- [maximum-impact career strata](../representations/maximum_impact_career_strata.md)
- [within-career impact shuffle null](../validations/within_career_impact_shuffle_null.md)
- [APS-WoS career impact panel](../datasets/aps_wos_career_impact_panel.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [Q-model career impact prediction](../methods/q_model_career_prediction.md)
- [individual Q parameter](individual_q_parameter.md)
- [hot streaks](../mechanisms/hot_streaks.md)
- [citation window selection](../methods/citation_window_selection.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `highest_impact_sequence_position`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: N star over N; peak-impact position; highest-impact paper order; career peak position
