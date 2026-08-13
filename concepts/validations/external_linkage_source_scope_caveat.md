# External linkage source-scope caveat

## Summary

External linkage source-scope caveat is the validation problem that cross-domain link counts in a scholarly data lake are bounded by the source lists, matching rules, and snapshots used to construct them.

## Canonical Form

- Unit of analysis: paper, grant, patent, clinical trial, event mention, data-source table, or linkage layer.
- Typical representation: source-scope note, denominator inventory, linkage-coverage caveat, or source-specific missingness audit.
- Validation target: prevent observed cross-domain links from being interpreted as complete funding, translation, clinical, or public-attention influence.
- Empirical signature: linkage counts change with source inclusion, matching rules, and snapshot dates.

## Uses in Science of Science

- Generalizes caveats across [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md).
- Applies to [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md), [clinical-trial publication linkages](../datasets/clinical_trial_publication_linkages.md), [patent citation-to-science link table](../datasets/patent_citation_to_science_link_table.md), and [Crossref Event Data mention linkages](../datasets/crossref_event_data_mention_linkages.md).
- Connects linkage interpretation to [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md).
- Important for SciSciNet because the MAG-derived snapshot is historically useful but stale relative to current OpenAlex and Dimensions records.

## Operationalization

- Record each external source, its snapshot date, and its inclusion criteria.
- Report whether links are DOI-based, fuzzy matched, bridge-key based, or manually curated.
- Keep source-specific denominators rather than collapsing all missing links into absence of influence.
- Prefer current Dimensions or OpenAlex for recent coverage, then use SciSciNet as a historical replication or linkage layer.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes SciSciNet linkage layers that connect papers to grants, patents, clinical trials, event data, and other external resources.
- The same paper discusses limitations from source selection, matching imperfection, and the static final MAG snapshot.
- This motif is distinct from individual linkage-table pages because it is the cross-layer denominator and source-scope caveat.
- It is also distinct from snapshot versioning because it concerns external-link interpretation, not only publication-backbone dating.

## Caveats

- Source-scope caveats can be different for each linkage layer.
- A missing link can mean no relationship, no identifier, no source coverage, or failed matching.
- Historical data lakes should not be used for recent-paper completeness without refresh or validation.

## Links

- [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)
- [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md)
- [clinical-trial publication linkages](../datasets/clinical_trial_publication_linkages.md)
- [patent citation-to-science link table](../datasets/patent_citation_to_science_link_table.md)
- [Crossref Event Data mention linkages](../datasets/crossref_event_data_mention_linkages.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; SciSciNet: W4378980478; WoS: unknown]

## Metadata

- Concept ID: `external_linkage_source_scope_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: external linkage source scope; cross-domain linkage denominator caveat; data-lake linkage source caveat; source-scoped external links
