# New source-title update queue

## Summary

A science-map update begins by identifying newly indexed source titles that are absent from the prior map before assigning them to existing categories.

## Canonical Form

- Unit of analysis: source title, map version, WoS title list, Scopus title list, prior-map roster, or unmatched-title queue.
- Typical representation: delta queue of new source titles requiring map assignment.
- Mechanism, measurement, or validation target: maintenance workflow for science-map source coverage.
- Empirical signature: new or renamed source titles are isolated before assignment so coverage expansion is auditable.

## Uses in Science of Science

- Refines science-map update workflow by linking it to [science map update workflows](science_map_update_workflows.md) and [bibliometric data access modes](bibliometric_data_access_modes.md).
- Useful as a reusable check when [full database bibliometric access](full_database_bibliometric_access.md) is used in science-of-science inference.
- Creates cross-links to [cited journal title normalization](cited_journal_title_normalization.md) so the motif is not interpreted in isolation.

## Operationalization

- Compare current WoS and Scopus title lists against the previous map roster.
- Generate an unmatched-new-title queue before category assignment.
- Audit title changes, splits, mergers, and coverage-policy changes before treating a record as a new journal.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) shows both Scopus and WoS update workflows beginning by finding source titles not present in the original classification.
- The motif separates update detection from classification assignment.

## Caveats

- Title changes, splits, mergers, and coverage changes can masquerade as new journals.
- Database source-title strings require normalization before queue construction.

## Links

- [Science map update workflows](science_map_update_workflows.md)
- [Bibliometric data access modes](bibliometric_data_access_modes.md)
- [Full-database bibliometric access](full_database_bibliometric_access.md)
- [Cited journal title normalization](cited_journal_title_normalization.md)
- [Scholarly snapshot versioning](scholarly_snapshot_versioning.md)
- [Web of Science](../datasets/web_of_science.md)
- [Scopus](../datasets/scopus.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `new_source_title_update_queue`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: new journal detection; source-title delta queue; map coverage refresh list
