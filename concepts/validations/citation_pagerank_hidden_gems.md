# Citation PageRank hidden gems

## Summary

Citation PageRank hidden gems are papers whose recursive citation rank is much higher than their direct citation-count rank.

## Canonical Form

- Unit of analysis: paper, citation-network node, ranked outlier, or evaluation candidate.
- Typical representation: high PageRank rank paired with modest citation rank, often using a rank-ratio or residual from citation-count expectations.
- Validation target: whether recursive citation indicators recover influential works that raw citation counts under-rank.
- Empirical signature: outlier papers are recognizable to field experts or linked to later influential descendants despite limited direct citations.

## Uses in Science of Science

- Validates [citation PageRank](../measures/citation_pagerank.md) and [Google number](../measures/google_number.md) as complements to raw [citation impact indicators](../measures/citation_impact_indicators.md).
- Provides a way to identify hidden influence, method inheritance, or incorporated ideas that direct citation counts miss.
- Connects with [hidden citations](../measures/hidden_citations.md) and obliteration-by-incorporation motifs.

## Operationalization

- Compute PageRank or Google number on a directed citation network.
- Rank papers by recursive score and by direct citation count.
- Identify papers with unusually high recursive rank relative to citation rank using [PageRank-citation rank divergence](../measures/pagerank_citation_rank_divergence.md) or residuals from the [Google-number citation scaling check](google_number_citation_scaling_check.md).
- Inspect the citing neighborhood, reference-list dilution mechanism, and field-expert recognition before treating an outlier as a true hidden gem.
- Decompose the outlier with [citing-child PageRank contribution](../measures/citing_child_pagerank_contribution.md) to identify whether influence is broad or concentrated in one famous child.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) identifies outliers from the relation between Google number and citation count in the Physical Review citation network.
- The paper labels exceptional high-PageRank outliers as "gems" and reports that several are widely familiar to physicists despite modest direct citation counts.
- Chen et al. use examples such as Slater's determinant paper and the Rosenstock-Marquardt paper to show how influential citing descendants and short reference lists can elevate a paper's Google rank.
- The Rosenstock-Marquardt example is also a warning that a single influential child with a short reference list can create a plausible but fragile hidden-gem signal.

## Caveats

- A PageRank outlier is a discovery cue, not proof of quality or historical importance.
- Some outliers can reflect database boundaries, missing external citations, field-specific reference practices, or a single influential citing child.
- Expert review and citation-context evidence are needed before using hidden-gem status in evaluation.

## Links

- [citation PageRank](../measures/citation_pagerank.md)
- [Google number](../measures/google_number.md)
- [PageRank-citation rank divergence](../measures/pagerank_citation_rank_divergence.md)
- [Google-number citation scaling check](google_number_citation_scaling_check.md)
- [recursive citation weighting](../mechanisms/recursive_citation_weighting.md)
- [reference-list dilution](../mechanisms/reference_list_dilution.md)
- [citing-child PageRank contribution](../measures/citing_child_pagerank_contribution.md)
- [PageRank damping sensitivity](pagerank_damping_sensitivity.md)
- [PageRank age-bias check](pagerank_age_bias_check.md)
- [Physical Review citation network](../datasets/physical_review_citation_network.md)
- [hidden citations](../measures/hidden_citations.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]

## Metadata

- Concept ID: `citation_pagerank_hidden_gems`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: PageRank gems; recursive-rank outliers; high PageRank low citation papers; citation hidden gems
