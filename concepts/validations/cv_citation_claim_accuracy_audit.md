# CV citation-claim accuracy audit

## Summary

Audits mismatch between self-reported CV bibliometrics and professionally computed source metrics.

## Canonical Form

- Unit of analysis: CV, researcher profile, evaluator dossier, or author metric claim.
- Typical representation: claimed-versus-recomputed citation count, h-index, source, and census date.
- Validation target: accuracy and provenance of bibliometric claims used in assessment.
- Empirical signature: self-reported values diverge from standardized source-derived values after source and date alignment.

## Uses in Science of Science

- Adds an evaluated-party verification layer to [standardized author citation database](../datasets/standardized_author_citation_database.md) workflows.
- Useful for responsible-metrics audits where author-provided metrics enter hiring, promotion, grant, or prize files.
- Connects metric transparency to [evaluated-party data verification](evaluated_party_data_verification.md) and database coverage sensitivity.

## Operationalization

- Extract CV-reported citation counts, h-index values, dates, sources, and self-citation rules.
- Recompute values in the declared or standardized source and classify discrepancies by source mismatch, census date, author-record split/merge, self-citation handling, and document inclusion.
- Report discrepancy rates and route ambiguous cases to source-record correction rather than assuming intent.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) argues that CV self-reported citation information is often inaccurate and not professionally calculated.
- The standardized database is presented partly as a way to provide reproducible, source-based alternatives to ad hoc author claims.

## Caveats

- A mismatch can reflect source or date differences rather than bad faith.
- Some CVs report discipline-specific sources that are not directly comparable to Scopus-based metrics.

## Links

- [Standardized author citation database](../datasets/standardized_author_citation_database.md)
- [Evaluated-party data verification](evaluated_party_data_verification.md)
- [Transparent metric construction](../methods/transparent_metric_construction.md)
- [Responsible metrics](../measures/responsible_metrics.md)
- [Citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `cv_citation_claim_accuracy_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: CV bibliometric verification; self-reported citation audit; author metric claim audit
