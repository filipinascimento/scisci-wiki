# Institution citation-rank proxy

## Summary

Institution citation-rank proxy ranks institutions by cumulative citation impact so that institutional mobility can be analyzed as movement through a prestige or impact hierarchy.

## Canonical Form

- Unit of analysis: institution, paper set, citation window, institutional rank, or career move.
- Typical representation: institution-level cumulative citations `C_i`, output `P_i`, h-index `H_i`, and a rank ordering derived from one selected proxy.
- Measurement target: a reproducible institutional-status axis for mobility, hiring, stratification, or evaluation studies.
- Empirical signature: similar high-rank institutions appear under correlated ranking proxies, while rank-transition conclusions are tested for proxy sensitivity.

## Uses in Science of Science

- Supplies the rank axis for [institutional rank transition likelihood](institutional_rank_transition_likelihood.md).
- Links mobility evidence to broader [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md) and cumulative advantage arguments.
- Pairs with [institution size-impact scaling](institution_size_impact_scaling.md) to separate scale, output, and impact components of institutional position.
- Provides a field-bounded alternative to global university rankings when studying author mobility in a single publication corpus.

## Operationalization

- Define the institution-paper corpus and the citation window.
- Aggregate papers and citations by disambiguated institution.
- Choose a rank proxy, usually cumulative citations, total output, institutional h-index, or an external prestige score.
- Report correlations or robustness checks across plausible proxies before interpreting rank movement.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) ranks Physical Review institutions using cumulative citations collected by institution-affiliated papers.
- The paper also computes institutional paper counts and institutional h-index values, reporting strong agreement among these rank proxies.
- Deville et al. use cumulative citations as the main rank proxy because the highest-ranked institutions align with well-known physics universities and labs.
- The rank proxy feeds the transition matrix that reveals stratified mobility between elite and lower-ranked institutions.

## Caveats

- Citation-rank proxies are field- and corpus-specific; they should not be treated as universal institutional quality measures.
- Large institutions can rank highly because of scale, not only per-paper impact.
- Internal citation windows may miss external influence and can favor older institutions with long publication histories.

## Links

- [institutional rank transition likelihood](institutional_rank_transition_likelihood.md)
- [institution size-impact scaling](institution_size_impact_scaling.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)
- [h-index](h_index.md)
- [citation impact indicators](citation_impact_indicators.md)
- [rank-transition shuffle null](../validations/rank_transition_shuffle_null.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; WoS: unknown]

## Metadata

- Concept ID: `institution_citation_rank_proxy`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: institutional citation ranking; citation-based institution prestige; institution cumulative citation rank; APS institution rank proxy
