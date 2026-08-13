# Cross-corpus disruptiveness replication

## Summary

Cross-corpus disruptiveness replication tests whether a disruptiveness trend found in one scholarly or patent database persists when the same metric is recomputed in independent publication corpora.

## Canonical Form

- Unit of analysis: paper, patent, corpus, field, technology category, citation network, or disruption score.
- Typical representation: replicated CD-index trend, corpus-by-year panel, robustness figure, or source-specific slope comparison.
- Validation target: separate a substantive disruptiveness trend from database-specific coverage, indexing, or citation-network artifacts.
- Empirical signature: decline or stability conclusions remain directionally similar across multiple independently curated corpora.

## Uses in Science of Science

- Provides source-robustness evidence for [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md).
- Extends [disruption measure validation](disruption_measure_validation.md) beyond face-validity cases and text signals.
- Helps decide whether conclusions from [Web of Science](../datasets/web_of_science.md), patent, JSTOR, APS, MAG, PubMed, [OpenAlex](../datasets/openalex.md), or [Dimensions](../datasets/dimensions.md) data are source-specific.
- Supports future refreshes that replace legacy MAG-derived corpora with current OpenAlex or Dimensions snapshots.

## Operationalization

- Define a disruption metric and citation window that can be computed in each corpus.
- Reconstruct focal-work, predecessor, and future-citing relations within each source.
- Plot or model the trend separately for each corpus rather than pooling them prematurely.
- Document source boundaries, field coverage, citation completeness, and historical coverage windows.
- Compare direction, timing, and magnitude of trends, not only statistical significance.

## Evidence and Validations

- Verified full-text evidence from Park, Leahey, and Funk (2023) reports primary analyses on Web of Science papers and USPTO PatentsView patents.
- The same paper replicates the core paper findings in four additional datasets: JSTOR, the American Physical Society corpus, Microsoft Academic Graph, and PubMed.
- Park et al. describe those replication corpora as encompassing about 20 million additional papers.
- The authors report similar declines in disruptiveness across these additional sources, arguing that the trend is not driven by WoS, USPTO, or a particular source-specific CD-index derivation.

## Caveats

- Replication corpora are not independent in every respect; citation practices and journal overlap can still create shared biases.
- Legacy MAG-based replication should be refreshed with current OpenAlex or Dimensions data when recent coverage matters.
- Corpus-specific source boundaries can change the denominator, especially for humanities, conference proceedings, preprints, and patents.
- Directional replication does not guarantee identical magnitude or mechanism across fields.

## Links

- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [disruption measure validation](disruption_measure_validation.md)
- [alternative CD-index derivation robustness](alternative_cd_index_derivation_robustness.md)
- [disruptiveness practice-control stack](disruptiveness_practice_control_stack.md)
- [Web of Science](../datasets/web_of_science.md)
- [PatentsView utility patent sample](../datasets/patentsview_utility_patent_sample.md)
- [MAG publication backbone](../datasets/mag_publication_backbone.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `cross_corpus_disruptiveness_replication`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: cross-dataset disruption replication; multi-corpus CD5 robustness; disruption source replication; corpus robustness for disruptiveness decline
