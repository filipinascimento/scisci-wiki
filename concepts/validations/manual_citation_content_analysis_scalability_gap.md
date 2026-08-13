# Manual citation content-analysis scalability gap

## Summary

Manual citation content-analysis scalability gap is the risk that small hand-coded citation-function studies do not scale without reliability, automation, and sampling checks.

## Canonical Form

- Unit of analysis: manual citation sample, coding scheme, annotator set, field sample, or automation pipeline.
- Typical representation: sample-size audit, agreement statistic, cross-validation report, or automation-readiness caveat.
- Validation target: whether citation-content conclusions can be generalized or automated.
- Empirical signature: prior schemes rely on small samples, weak independent validation, or no scalable classifier.

## Uses in Science of Science

- Motivates [citation-function agreement validation](citation_function_agreement_validation.md).
- Frames [citation function classification](../methods/citation_function_classification.md) as a scale-up step rather than a convenience.
- Audits [explicit citation-evidence annotation](../methods/explicit_citation_evidence_annotation.md) before using labels in metrics.
- Helps keep [responsible metrics](../measures/responsible_metrics.md) from relying on unverifiable citation-intent claims.

## Operationalization

- Review sample sizes, coder independence, agreement statistics, and field coverage in citation-content studies.
- Check whether coding categories have operational definitions that independent annotators can apply.
- Test classifier performance on held-out papers or fields before scaling.
- Report where manual coding remains necessary because automation is unreliable.
- Treat non-cross-validated schemes as exploratory unless replicated.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) critiques earlier citation-content studies for small samples and limited independent validation.
- The paper explicitly positions reliable annotation and supervised classification as a way to scale citation-function analysis.
- Its 12-category annotation task and machine-learning evaluation address the gap between content analysis and operational citation processing.
- The motif is therefore a validation prerequisite for typed-citation metrics and search systems.

## Caveats

- Manual analysis can still be the best method for rare or nuanced categories.
- Automation may scale errors if the annotation scheme is not reliable.
- A successful classifier in one domain does not eliminate the need for transfer checks.

## Links

- [citation-function agreement validation](citation_function_agreement_validation.md)
- [citation function classification](../methods/citation_function_classification.md)
- [explicit citation-evidence annotation](../methods/explicit_citation_evidence_annotation.md)
- [computational-linguistics citation-function corpus](../datasets/computational_linguistics_citation_function_corpus.md)
- [citation-function class imbalance](citation_function_class_imbalance.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `manual_citation_content_analysis_scalability_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation content-analysis scale gap; manual citation coding scalability; citation-function automation gap; small-sample citation coding caveat
