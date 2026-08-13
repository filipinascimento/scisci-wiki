# Paper-field linkages

## Summary

Paper-field linkages connect publications to field, topic, discipline, or classification identifiers.

## Canonical Form

- Unit of analysis: paper, field, topic, classification level, paper-field row, or field-year baseline.
- Typical representation: bipartite paper-field table, multilabel topic assignment, or hierarchical classification edge.
- Mechanism or measurement target: field membership, normalization strata, interdisciplinarity, and science maps.
- Empirical signature: a paper ID is linked to one or more field IDs, often with hierarchy or level metadata.

## Uses in Science of Science

- Provides the table-level representation behind [field classifications](../measures/field_classifications.md).
- In OpenAlex, paper-field linkages are represented through [OpenAlex concept classifier](../methods/openalex_concept_classifier.md) assignments to Wikidata-backed concepts.
- Supports [field-normalized citation impact](../measures/field_normalized_citation_impact.md), hit-paper flags, interdisciplinarity measures, and science-map overlays.
- Lets dataset users preserve field granularity instead of collapsing all classifications to a single discipline label.
- Makes field definitions auditable when comparing OpenAlex, Dimensions, SciSciNet, WoS, or algorithmic cluster outputs.
- Can represent hierarchical [publication-level field classification](../methods/publication_level_field_classification.md) as one paper linked to one area per level.

## Operationalization

- Keep paper-field assignments as a separate table with stable paper and field IDs.
- Preserve hierarchy level, field type, assignment weights if available, and source/version.
- Decide how to treat multi-field papers before computing field-normalized measures.
- Validate field assignments against expert taxonomies, journal categories, topic models, or citation-based clusters.
- Record [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md) because field systems and classifier outputs change across releases.
- Preserve source-native field keys and paper keys through [scholarly table primary keys](scholarly_table_primary_keys.md) before computing normalized impact or interdisciplinarity measures.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes SciSciNet_Fields as 19 top-level fields and 292 subfields, and SciSciNet_PaperFields as the paper-field linkage table.
- Lin et al. report 277,494,994 paper-field records in SciSciNet.
- The same table includes hit-paper flags for top 1%, 5%, and 10% citation outcomes within the same field level and year, plus normalized citation values.
- Verified full-text evidence from Priem et al. (2022) describes OpenAlex concepts as Wikidata entities arranged in a MAG-derived hierarchy, with works assigned to concepts from titles and abstracts by an automated classifier.
- Priem et al. report that around 85% of OpenAlex works have at least one concept assigned.
- This makes paper-field linkages both a representation motif and a measurement dependency for normalized impact analyses.
- Verified full-text evidence from Waltman and van Eck (2012) supplies a citation-cluster alternative: papers are assigned to nested research areas at multiple levels, with each lower-level area belonging to one higher-level area.
- Their application shows why linkages should store hierarchy level and version: the same paper can belong to a broad discipline, a middle-level field, and a small subfield in the same classification release.
- The same full text also shows why linkages should retain source context for audits such as [single-journal publication-assignment audits](../validations/single_journal_publication_assignment_audit.md).

## Caveats

- Field systems are source-specific and versioned.
- Multi-field assignment rules can change normalized impact and interdisciplinarity conclusions.
- Fields inferred by machine learning or citation clusters should not be treated as timeless natural categories.

## Links

- [field classifications](../measures/field_classifications.md)
- [publication-level field classification](../methods/publication_level_field_classification.md)
- [hierarchical resolution-parameter clustering](../methods/hierarchical_resolution_parameter_clustering.md)
- [single-journal publication-assignment audit](../validations/single_journal_publication_assignment_audit.md)
- [OpenAlex concept classifier](../methods/openalex_concept_classifier.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [mean normalized citation score](../measures/mean_normalized_citation_score.md)
- [science maps](science_maps.md)
- [science map overlays](science_map_overlays.md)
- [interdisciplinarity](../mechanisms/interdisciplinarity.md)
- [scholarly identifier spine](scholarly_identifier_spine.md)
- [scholarly table primary keys](scholarly_table_primary_keys.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [sciscinet v2](../datasets/sciscinet_v2.md)
- [scholarly data lakes](../datasets/scholarly_data_lakes.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]
- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown]
- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `paper_field_linkages`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Aliases: paper-field table; paper-topic links; field assignment edges; publication classification links
