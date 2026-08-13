# Maximum-impact career strata

## Summary

Maximum-impact career strata group scientists by the citation impact of their personal-best paper, allowing career productivity and impact trajectories to be compared across low-, medium-, and high-maximum-impact careers.

## Canonical Form

- Unit of analysis: scientist, author-disambiguated career, personal-best paper, career-impact group, or publication sequence.
- Typical representation: bottom, middle, and top strata defined by the maximum fixed-window citation count `c10*`.
- Representation target: stratify careers by peak impact magnitude before comparing productivity growth, impact timing, or Q-model behavior.
- Empirical signature: productivity and average-impact trajectories differ across maximum-impact strata, even while the highest-impact sequence position is broadly random within each career.

## Uses in Science of Science

- Complements [highest-impact sequence position](../measures/highest_impact_sequence_position.md), which measures where the personal-best paper occurs rather than how large it is.
- Provides a grouping layer for [scientific career impact dynamics](../mechanisms/scientific_career_impact.md), [random impact rule](../mechanisms/random_impact_rule.md), and [career growth exponents](../measures/career_growth_exponents.md).
- Helps separate peak-impact magnitude from timing, productivity, and [individual Q parameter](../measures/individual_q_parameter.md).
- Links author-level impact strata to later evaluation motifs such as [hit-paper probability](../measures/hit_paper_probability.md) and [top-cited scientist status](../measures/top_cited_scientist_status.md).

## Operationalization

- Build author-disambiguated careers and assign each paper a fixed-window impact measure such as ten-year citations.
- Identify each scientist's highest-impact paper and record its impact `c10*`.
- Define impact strata using explicit cutoffs or quantiles, then report the threshold values and sample restrictions.
- Compare career trajectories, productivity exponents, Q estimates, and peak-position measures across strata.
- Avoid interpreting the strata as intrinsic talent groups without responsible-metrics caveats.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) defines each scientist's most-cited paper using ten-year citation impact `c10*`.
- The paper groups scientists into high maximum impact, low maximum impact, and medium maximum impact categories using the top 5%, bottom 20%, and middle 75% of the `c10*` distribution.
- Sinatra et al. use these strata to compare cumulative productivity growth and yearly productivity trajectories, finding faster productivity growth for high-maximum-impact scientists.
- The same strata support the distinction between impact magnitude and impact timing: career strata differ in peak magnitude, while the personal-best paper can occur anywhere in the publication sequence.

## Caveats

- Stratum thresholds depend on the citation window, field normalization, author-disambiguation quality, and career-length restrictions.
- A personal-best citation count can reflect field, collaboration, venue, visibility, and database coverage as well as the scientist's contribution.
- Grouping by maximum impact can induce right-tail selection and should not be used as a stand-alone evaluation label.

## Links

- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [APS-WoS career impact panel](../datasets/aps_wos_career_impact_panel.md)
- [highest-impact sequence position](../measures/highest_impact_sequence_position.md)
- [random impact rule](../mechanisms/random_impact_rule.md)
- [career growth exponents](../measures/career_growth_exponents.md)
- [individual Q parameter](../measures/individual_q_parameter.md)
- [Q-model career impact prediction](../methods/q_model_career_prediction.md)
- [R-model productivity null](../validations/r_model_productivity_null.md)
- [hit-paper probability](../measures/hit_paper_probability.md)
- [top-cited scientist status](../measures/top_cited_scientist_status.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; SciSciNet: W2547045893; WoS: unknown]

## Metadata

- Concept ID: `maximum_impact_career_strata`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: high maximum impact scientists; low maximum impact scientists; personal-best impact strata; c10 star career strata
