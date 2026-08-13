# Rank Log Binning For Transition Power

## Summary

Rank log binning for transition power groups institution ranks logarithmically so sparse origin-destination mobility transitions have enough observations for stable transition estimates.

## Canonical Form

- Unit of analysis: institution rank, transition matrix cell, mobility transition, or rank group.
- Typical representation: log-binned rank strata before mobility likelihood estimation.
- Mechanism or measurement target: statistical power and resolution tradeoff in rank-transition matrices.
- Empirical signature: many rank positions are collapsed into a smaller number of logarithmic groups.

## Uses in Science of Science

- Operationalizes rank strata before [institutional rank transition likelihood](../measures/institutional_rank_transition_likelihood.md).
- Supports [rank-transition shuffle null](../validations/rank_transition_shuffle_null.md).
- Provides a resolution choice for [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md).
- Complements the [top-cited institution coverage gate](top_cited_institution_coverage_gate.md).

## Operationalization

- Define the rank ordering and coverage gate before binning.
- Choose logarithmic rank bins and report the number of bins.
- Estimate transition probabilities between bins rather than raw ranks.
- Check whether conclusions depend on the number or width of bins.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) reports about 6,000 transitions between 1,000 institutions in the analyzed scientist subset.
- To obtain statistically significant transition estimates, the paper bins institutions logarithmically by rank into five groups.
- The binning enables the reported transition probabilities and normalized mobility ratios.

## Caveats

- Log bins can hide variation within elite or lower-ranked groups.
- Different bin counts can change inferred mobility asymmetries.
- Binning should not be confused with the underlying institution rank proxy.

## Links

- [institutional rank transition likelihood](../measures/institutional_rank_transition_likelihood.md)
- [rank-transition shuffle null](../validations/rank_transition_shuffle_null.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [top-cited institution coverage gate](top_cited_institution_coverage_gate.md)
- [midrank mobility neutral zone](../mechanisms/midrank_mobility_neutral_zone.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; SciSciNet: W2049213211; WoS: unknown]

## Metadata

- Concept ID: `rank_log_binning_for_transition_power`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: logarithmic rank bins; mobility transition rank binning; rank-strata power binning; institution-rank log grouping
