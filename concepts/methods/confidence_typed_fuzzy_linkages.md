# Confidence-typed fuzzy linkages

## Summary

Confidence-typed fuzzy linkages store exact, independent-source, heuristic, and fuzzy match routes so downstream analyses can choose precision and recall tradeoffs explicitly.

## Canonical Form

- Unit of analysis: candidate match, accepted relation, match type, confidence score, or linkage table row.
- Typical representation: `Type`, confidence score, score gap, match-route flag, independent-source flag, or validation tier.
- Method target: keep uncertain links usable without hiding their lower confidence.
- Empirical signature: a linkage table distinguishes exact DOI/title matches from fuzzy search matches and independent-source matches.

## Uses in Science of Science

- Adds match-quality provenance to [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md), especially award-to-paper links built from unstructured source text.
- Supports [identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md) when exact bridges do not cover all records.
- Provides a reusable pattern for [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md) where grants, patents, clinical trials, news, and social-media sources have different match qualities.
- Connects to validation pages such as [SciSciNet-Dimensions grant-linkage validation](../validations/sciscinet_dimensions_grant_linkage_validation.md).

## Operationalization

- Assign a match-type field for exact, standardized-title, search-score, independent-source, fuzzy, manual, and rejected candidates.
- Store the score, score gap, null-model threshold, duplicate-resolution rule, and source route.
- Expose precision-oriented and recall-oriented subsets rather than forcing one global threshold.
- Report sensitivity analyses that include and exclude fuzzy or lower-confidence links.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes an NSF award-publication matching pipeline with exact DOI matches, standardized-title matches, Elasticsearch candidate search, null-model score thresholds, fuzzy links, and Crossref-derived independent-source links.
- The paper reports high-confidence NSF links separately from additional possible fuzzy links.
- Lin et al. includes a `Type` field that distinguishes exact and Crossref-derived matches from fuzzy matches and a score-difference field for heuristic matches.

## Caveats

- Fuzzy links can increase coverage while introducing false positives.
- Exact identifier matches can still fail when identifiers are duplicated or attached to the wrong version.
- Link confidence should be treated as analysis input, not only a data-cleaning detail.

## Links

- [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md)
- [identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md)
- [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)
- [research-ready table curation](research_ready_table_curation.md)
- [SciSciNet-Dimensions grant-linkage validation](../validations/sciscinet_dimensions_grant_linkage_validation.md)
- [grant identifier standardization gap](../validations/grant_identifier_standardization_gap.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `confidence_typed_fuzzy_linkages`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: fuzzy linkage confidence types; match-route provenance; high-confidence versus fuzzy links; linkage precision recall tiering
