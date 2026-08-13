# SciSciNet static external-linkage windows

## Summary

Each external linkage layer in SciSciNet has its own collection date or source window, so the data lake combines asynchronously frozen evidence layers.

## Canonical Form

- Unit of analysis: external linkage table, collection window, NIH link, NSF link, patent citation, trial link, Newsfeed event, Twitter event, or MAG release.
- Typical representation: per-table source-window manifest for frozen linkage layers.
- Mechanism, measurement, or validation target: temporal validity of cross-domain SciSciNet relation counts.
- Empirical signature: attention, funding, patent, clinical-trial, and citation counts differ in freshness because their source tables were frozen at different times.

## Uses in Science of Science

- Refines SciSciNet temporal validation by linking it to [citation data census dates](../methods/citation_data_census_dates.md) and [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md).
- Useful as a reusable check when [external linkage source scope caveat](external_linkage_source_scope_caveat.md) is used in science-of-science inference.
- Creates cross-links to [external trace count rollups](../measures/external_trace_count_rollups.md) so the motif is not interpreted in isolation.

## Operationalization

- Record per-table source dates for NIH, NSF, patents, trials, Newsfeed, Twitter, and MAG.
- Use those dates before interpreting cross-domain counts or time trends.
- Refresh external layers with current sources when recent papers or current attention totals are the target.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) gives separate update or collection dates for NIH links, patent citation corpus, clinical trials, and Crossref Event Data windows.
- The motif makes asynchronous external evidence windows visible.

## Caveats

- SciSciNet external counts are outdated for recent papers.
- Different linkage windows can create artificial differences across funding, patent, trial, news, and social-media layers.

## Links

- [Citation data census dates](../methods/citation_data_census_dates.md)
- [Scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [External linkage source-scope caveat](external_linkage_source_scope_caveat.md)
- [External trace count rollups](../measures/external_trace_count_rollups.md)
- [Crossref Event Data mention linkages](../datasets/crossref_event_data_mention_linkages.md)
- [Patent citation-to-science link table](../datasets/patent_citation_to_science_link_table.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `sciscinet_static_external_linkage_windows`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: asynchronous linkage snapshots; external table vintage; source-window caveat
