# Career growth exponents

## Summary

Career growth exponents summarize how a scientist's cumulative publications and cumulative citations scale with career time.

## Canonical Form

- Unit of analysis: scientist, author cohort, discipline, career phase, cumulative publication series, or cumulative citation series.
- Typical representation: publication growth exponent alpha and citation growth exponent zeta fitted to Ni(t) and Ci(t).
- Measurement target: superlinear or linear growth of productivity and impact over a scientist's career.
- Empirical signature: alpha above one indicates faster-than-linear cumulative publication growth, while zeta above alpha indicates citation accumulation grows faster than publication count.

## Uses in Science of Science

- Converts [scientific career impact dynamics](../mechanisms/scientific_career_impact.md) into compact longitudinal growth parameters.
- Can be compared across [maximum-impact career strata](../representations/maximum_impact_career_strata.md) to test whether productivity growth differs by personal-best impact magnitude.
- Provides empirical benchmarks for [reputation Monte Carlo career model](../methods/reputation_monte_carlo_career_model.md).
- Helps interpret [cumulative author reputation](cumulative_author_reputation.md) as a dynamic trajectory rather than a static total.
- Supports comparisons across fields where collaboration, citation aging, and publication rates differ.
- Pairs with [citation supply deflator](../methods/citation_supply_deflator.md) to test whether career growth exceeds secular expansion in publication output.

## Operationalization

- Build a scientist's cumulative publication count Ni(t) from annual publication counts.
- Build cumulative citation count Ci(t) from annual citation histories.
- Fit power-law scaling during a defined career growth phase, commonly after first publication and before late-career saturation.
- Estimate alpha for Ni(t) and zeta for Ci(t), ideally at both individual and cohort levels.
- Deflate citations by field-level publication growth with [citation supply deflator](../methods/citation_supply_deflator.md) when citation supply grows over time.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) finds faster-than-linear growth in cumulative publication number and cumulative citation count for highly cited scientists over much of the career growth phase.
- The paper characterizes growth trajectories as Ni(t) scaling with exponent alpha and Ci(t) scaling with exponent zeta.
- Petersen et al. report alpha greater than or approximately one and zeta greater than alpha in the studied cohorts.
- The paper estimates individual alpha_i and zeta_i and reports that cohort averages match aggregate patterns, supporting use at both individual and group levels.
- After deflating citation counts for roughly 5 percent annual growth in publication output, zeta_i remains generally above two, suggesting growth beyond baseline science expansion.
- Verified full-text evidence from Sinatra et al. (2016) fits cumulative productivity as `Ni(t) ~ t^gamma_i` after first publication.
- Sinatra et al. report that productivity-growth exponents differ by [maximum-impact career strata](../representations/maximum_impact_career_strata.md), with higher average growth for high-maximum-impact scientists than for low-maximum-impact scientists.
- The paper uses this exponent contrast to separate productivity growth from the timing of the personal-best paper under the [random impact rule](../mechanisms/random_impact_rule.md).

## Caveats

- Growth exponents depend on the chosen career phase and endpoint.
- Highly cited scientist cohorts may overstate growth regularity relative to the full scientist population.
- Citation deflation requires field-specific publication-growth estimates.

## Links

- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [maximum-impact career strata](../representations/maximum_impact_career_strata.md)
- [cumulative author reputation](cumulative_author_reputation.md)
- [reputation Monte Carlo career model](../methods/reputation_monte_carlo_career_model.md)
- [highly cited scientist career panel](../datasets/highly_cited_scientist_career_panel.md)
- [citation supply deflator](../methods/citation_supply_deflator.md)
- [papers-per-author distribution](papers_per_author_distribution.md)
- [R-model productivity null](../validations/r_model_productivity_null.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation impact indicators](citation_impact_indicators.md)
- [m-quotient](m_quotient.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]
- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `career_growth_exponents`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: alpha zeta career growth; productivity growth exponent; citation growth exponent; cumulative career scaling
