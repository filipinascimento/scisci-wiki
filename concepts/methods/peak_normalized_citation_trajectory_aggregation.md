# Peak-normalized citation trajectory aggregation

## Summary

Peak-normalized citation trajectory aggregation is a preprocessing protocol that rescales each paper's annual citation trajectory by its own peak before averaging trajectories across papers, fields, or author portfolio rank groups.

## Canonical Form

- Unit of analysis: paper, publication age, annual citation increment, field citation quintile, or author portfolio rank set.
- Typical representation: normalized annual citation trajectory `delta c prime`, averaged across comparable papers.
- Method target: compare citation life-cycle shapes without letting the highest-volume papers dominate the aggregate curve.
- Empirical signature: field or portfolio groups can be compared by peak timing, decay shape, and post-peak half-life after each paper is scaled to its own maximum annual citation rate.

## Uses in Science of Science

- Provides the aggregation layer behind [citation life-cycle half-life](../measures/citation_life_cycle_half_life.md).
- Supports [author-rank citation profiles](../measures/author_rank_citation_profile.md) by comparing citation dynamics within ranked portfolio groups.
- Supplies empirical trajectory benchmarks for [reputation effect citation models](reputation_effect_citation_model.md) and [reputation Monte Carlo career models](reputation_monte_carlo_career_model.md).
- Connects paper-level [citation trajectory models](citation_trajectory_models.md) to field-level aging and obsolescence comparisons.

## Operationalization

- Compute each paper's annual citation increment by publication age or age since first citation.
- Divide each paper-year increment by that paper's maximum annual citation increment.
- Group papers by discipline, total-citation quintile, author portfolio rank, cohort, or another comparison set.
- Average the normalized trajectories within each group and report the number of papers contributing to each curve.
- Use the aggregated curve to estimate peak age, decay shape, and half-life rather than using raw citation counts directly.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) defines the annual citation trajectory as the number of new citations received in a publication year.
- The paper normalizes each individual trajectory by its own peak citation value before aggregation.
- Petersen et al. average these normalized trajectories across discipline-level citation quintiles and across ranked sets inside author portfolios.
- The resulting curves show that citation life cycles typically peak before about five years, while some papers display delayed secondary attention.

## Caveats

- Peak normalization removes magnitude information, so it should be paired with total citation counts or impact strata.
- Mature citation histories are needed because the observed peak can change when citation windows are right-censored.
- Multi-peak or delayed-recognition papers may be poorly summarized by a single peak-normalized curve.

## Links

- [citation life-cycle half-life](../measures/citation_life_cycle_half_life.md)
- [author-rank citation profile](../measures/author_rank_citation_profile.md)
- [reputation effect citation model](reputation_effect_citation_model.md)
- [reputation Monte Carlo career model](reputation_monte_carlo_career_model.md)
- [citation trajectory models](citation_trajectory_models.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `peak_normalized_citation_trajectory_aggregation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: normalized citation trajectory averaging; peak-scaled citation curve; citation trajectory peak scaling; normalized impact life-cycle aggregation
