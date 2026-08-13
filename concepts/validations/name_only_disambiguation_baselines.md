# Name-only disambiguation baselines

## Summary

Name-only disambiguation baselines are validation benchmarks that cluster author mentions using only normalized name strings, such as first-initial-plus-surname or all-initials-plus-surname rules.

## Canonical Form

- Unit of analysis: author mention, name block, name-string rule, baseline cluster, or labeled author identity.
- Typical representation: first-initial surname clusters, all-initials surname clusters, baseline precision/recall table, or blocking error profile.
- Validation target: determine whether richer author-disambiguation methods improve on simple name-string clustering.
- Empirical signature: metadata-rich methods are compared with name-only clusters under the same labeled sample and metrics.

## Uses in Science of Science

- Provides a lower-bound benchmark for [unsupervised author-disambiguation comparison](../methods/unsupervised_author_disambiguation_comparison.md).
- Connects [author-name blocking](../methods/author_name_blocking.md) to validation rather than treating blocking as only preprocessing.
- Helps quantify [homonym and synonym author errors](homonym_synonym_author_errors.md).
- Supports downstream audits when author-level studies rely on database-provided or custom identity clusters.

## Operationalization

- Normalize author names into one or more simple rules, such as first initial plus surname or all initials plus surname.
- Treat each identical normalized name string as one author cluster.
- Score the baseline clusters against a labeled identifier source using [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md).
- Compare richer methods against both loose and strict name-only rules.
- Report how baseline performance changes by name-block size, country, field, and availability of full given names.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) includes two name-only baselines in its author-disambiguation comparison.
- The paper compares richer unsupervised methods against first-initial-plus-surname and all-initials-plus-surname clustering on the same Web of Science/ResearcherID evaluation sample.
- It reports that all examined approaches outperform the first-initial-plus-surname baseline, while only some outperform the stricter all-initials-plus-surname baseline.
- The result shows that name-only baselines are not trivial; they define the minimum improvement expected from metadata-rich disambiguation.

## Caveats

- Name-only baselines can be strong when full initials are available and name ambiguity is low.
- They can falsely merge homonyms and falsely split synonyms, transliterations, name changes, and inconsistent initials.
- Baseline strength varies by culture, database name formatting, and historical metadata quality.
- A method that beats one name-only rule may still fail a stricter or more realistic baseline.

## Links

- [unsupervised author-disambiguation comparison](../methods/unsupervised_author_disambiguation_comparison.md)
- [author-name blocking](../methods/author_name_blocking.md)
- [coauthorship name-resolution bounds](coauthorship_name_resolution_bounds.md)
- [homonym and synonym author errors](homonym_synonym_author_errors.md)
- [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)
- [name-block size complexity](../measures/name_block_size_complexity.md)
- [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `name_only_disambiguation_baselines`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: name-string disambiguation baseline; first-initial surname baseline; all-initials surname baseline; name-only clustering benchmark
