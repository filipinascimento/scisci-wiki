# Institution size-impact scaling

## Summary

Institution size-impact scaling measures how institutional output, population, and citation impact vary together across organizations in a scholarly corpus.

## Canonical Form

- Unit of analysis: institution, author population, paper output, cumulative citations, or per-paper impact.
- Typical representation: scaling relations among institution size `A_i`, output `P_i`, cumulative citations `C_i`, average impact `C_i/P_i`, and productivity `P_i/A_i`.
- Measurement target: whether larger institutions have higher average impact, higher productivity, or both.
- Empirical signature: institution size correlates more strongly with average paper impact than with per-author productivity.

## Uses in Science of Science

- Contextualizes [institution citation-rank proxy](institution_citation_rank_proxy.md) by showing how rank can combine scale and impact.
- Links institutional prestige to resource concentration, team opportunities, and cumulative advantage.
- Helps interpret [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md) because larger high-impact institutions generate more move observations.
- Provides an organization-level counterpart to author- and paper-level citation-impact measures.

## Operationalization

- Count distinct authors affiliated with each institution in a corpus.
- Count papers and fixed-window citations for each institution.
- Estimate relationships between size and average impact, and between size and per-author productivity.
- Report whether analyses restrict to high-coverage institutions or include sparse low-output institutions.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) computes institution size `A_i`, paper count `P_i`, and cumulative citations `C_i` for Physical Review institutions.
- The paper reports fat-tailed institution-size and citation distributions.
- Deville et al. find that institution size positively correlates with average publication impact, while size has weaker relation to average productivity.
- The analysis focuses on the thousand most cited institutions, which account for more than 99% of papers in the dataset.

## Caveats

- Larger institutions can appear more impactful because of internal collaboration, historical age, or field specialization.
- Sparse institutions create noisy average impact and productivity estimates.
- Corpus-bounded citation counts can understate institutions that publish influential work outside the selected source.

## Links

- [institution citation-rank proxy](institution_citation_rank_proxy.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [citation impact indicators](citation_impact_indicators.md)
- [publication rate-normalized rank](publication_rate_normalized_rank.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)
- [cumulative advantage](../mechanisms/cumulative_advantage.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; WoS: unknown]

## Metadata

- Concept ID: `institution_size_impact_scaling`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: institution impact scaling; size-impact institutional gradient; institutional productivity scaling; organization citation scaling
