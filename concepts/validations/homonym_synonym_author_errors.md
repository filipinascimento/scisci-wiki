# Homonym and synonym author errors

## Summary

Homonym and synonym author errors are the two core identity-resolution failures in author-level bibliometric data: merging different people who share a name and splitting one person across multiple name variants.

## Canonical Form

- Unit of analysis: author mention, name string, author cluster, publication-author edge, or inferred person identity.
- Typical representation: name block, author cluster, false merge, false split, lumping error, or splitting error.
- Mechanism or measurement target: database ambiguity caused by shared names, initials, transliteration, name changes, inconsistent metadata, and incomplete persistent identifiers.
- Empirical signature: one detected author cluster contains multiple real people, or one real person's mentions are assigned to multiple clusters.

## Uses in Science of Science

- Gives the error-mode vocabulary behind [author name disambiguation](../methods/author_name_disambiguation.md).
- Explains why person-level analyses of [scientific career impact](../mechanisms/scientific_career_impact.md), [scientific mobility](../mechanisms/scientific_mobility.md), and [coauthorship networks](../representations/coauthorship_networks.md) require entity-resolution checks.
- Provides a data-quality bridge to [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md).

## Operationalization

- Compare inferred author clusters against persistent IDs, curated CVs, hand labels, or high-confidence database identifiers.
- Count false merges where one cluster contains mentions from multiple real authors.
- Count false splits where one real author's mentions are distributed across multiple clusters.
- Stratify errors by name frequency, field, country, publication year, script/transliteration, and [name-block size complexity](../measures/name_block_size_complexity.md).

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) identifies homonyms as different authors with the same name and synonyms as one author publishing under different names.
- The paper illustrates both mechanisms with author mentions carrying ResearcherID annotations, then uses the annotated mentions as evaluation evidence for disambiguation approaches.
- Tekles and Bornmann show that blocking choices create different error profiles: more specific name representations reduce block size but introduce splitting errors due to synonyms.
- The verified text also links large name blocks to lower disambiguation quality, because larger search spaces increase the potential for false links between author mentions.
- Verified full-text evidence from Newman (2001) provides an early coauthorship-network sensitivity strategy: compare surname-plus-first-initial and surname-plus-all-initials graphs to bound author counts and network statistics.

## Caveats

- Persistent identifiers are useful validation anchors but can be incomplete, self-selected, or unevenly adopted.
- Homonym and synonym error rates can differ strongly by culture, language, field, and database coverage.
- A workflow can improve one error mode while worsening the other, so precision and recall should both be reported.

## Links

- [author name disambiguation](../methods/author_name_disambiguation.md)
- [author-name blocking](../methods/author_name_blocking.md)
- [coauthorship name-resolution bounds](coauthorship_name_resolution_bounds.md)
- [name-block size complexity](../measures/name_block_size_complexity.md)
- [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md)
- [author similarity clustering](../methods/author_similarity_clustering.md)
- [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [name-based demographic inference](../methods/name_based_demographic_inference.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]
- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `homonym_synonym_author_errors`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Aliases: homonym errors; synonym errors; author false merges; author false splits
