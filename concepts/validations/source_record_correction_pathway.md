# Source-record correction pathway

## Summary

Source-record correction pathway is a data-quality workflow in which public author-metric errors are traced back to and corrected in the underlying citation-provider author records.

## Canonical Form

- Unit of analysis: author profile, publication record, citation-provider record, public metric release, or correction request.
- Typical representation: error report, provider correction request, updated snapshot comparison, or corrected author-profile linkage.
- Validation target: make metric errors repairable at the source rather than only patched in derivative tables.
- Empirical signature: rank changes are attributed to corrected publication membership or author records, and users are routed to the source provider for corrections.

## Uses in Science of Science

- Extends [evaluated-party data verification](evaluated_party_data_verification.md) to citation-provider records.
- Provides a repair route for [Scopus author profile disambiguation audit](scopus_author_profile_disambiguation_audit.md).
- Links [author metric update rank persistence](author_metric_update_rank_persistence.md) to source-record corrections.
- Adds governance detail to [transparent metric construction](../methods/transparent_metric_construction.md).

## Operationalization

- Identify suspect author profiles, split records, merged records, missing publications, or wrong affiliations.
- Trace the error to the source database record rather than only a downstream spreadsheet.
- Submit correction requests to the source provider or maintain a documented correction queue.
- Compare subsequent metric snapshots to distinguish citation accrual from source-record correction.
- Document unresolved errors and their likely effect on ranks or percentiles.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) describes Scopus author profiles as built from curated and algorithmic records with reported precision and recall.
- The paper reports manual checks for split author records and notes that some rank differences between snapshots were due to corrections in which papers were included in author records.
- Ioannidis et al. advise authors who detect data errors to contact Scopus to correct the entries and author records.

## Caveats

- Source providers may not expose correction workflows or accept all corrections.
- Correcting source records can change downstream rankings, making snapshot provenance important.
- Provider-side corrections do not solve all issues in field labels, citation windows, or metric interpretation.

## Links

- [evaluated-party data verification](evaluated_party_data_verification.md)
- [Scopus author profile disambiguation audit](scopus_author_profile_disambiguation_audit.md)
- [author metric update rank persistence](author_metric_update_rank_persistence.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [transparent metric construction](../methods/transparent_metric_construction.md)
- [Scopus](../datasets/scopus.md)
- [standardized author citation database](../datasets/standardized_author_citation_database.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; SciSciNet: W2968900048; WoS: unknown]

## Metadata

- Concept ID: `source_record_correction_pathway`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: provider record correction; author metric source correction; citation database correction pathway; author-record repair workflow
