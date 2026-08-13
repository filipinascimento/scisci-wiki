# Retraction source reconciliation

## Summary

Retraction source reconciliation combines journal retraction notices with external investigation reports, watchdog records, news reports, and author clarifications to infer the most defensible cause of a retraction.

## Canonical Form

- Unit of analysis: retracted paper, retraction notice, investigation report, author statement, watchdog record, or cause label.
- Typical representation: reconciled cause table, source-provenance manifest, notice-versus-secondary-source comparison, or adjudicated retraction codebook.
- Method target: reduce cause misclassification when notices are incomplete, ambiguous, or misleading.
- Empirical signature: some events coded as error from journal notices alone are recoded as fraud or suspected fraud after secondary-source review.

## Uses in Science of Science

- Provides the evidence-integration step under [retraction cause taxonomies](retraction_cause_taxonomies.md).
- Makes [retraction notice transparency](../validations/retraction_notice_transparency.md) operational by recording when notice text is insufficient.
- Supports more reliable estimates of [misconduct retraction share](../measures/misconduct_retraction_share.md).
- Gives [responsible metrics](../measures/responsible_metrics.md) a provenance rule before retraction counts are used as indicators.
- Does not solve the [unretracted misconduct dark figure](../validations/unretracted_misconduct_dark_figure.md), because reconciliation starts from known correction events.

## Operationalization

- Start with a bibliographic list of retracted works and their journal notices.
- Extract stated reasons and code them using a predefined [retraction cause taxonomy](retraction_cause_taxonomies.md).
- Cross-check unclear or broad notices against institutional reports, Office of Research Integrity findings, Retraction Watch, news media, public records, and author clarifications.
- Preserve the source supporting each final cause code and keep notice-only and reconciled labels separately.
- Use independent review or adjudication when sources disagree.
- Preserve warning states and nonfinal concerns separately through [nonretraction integrity warning states](../validations/nonretraction_integrity_warning_states.md).

## Evidence and Validations

- Verified full-text evidence from Fang, Steen, and Casadevall (2012) classifies 2,047 PubMed-indexed biomedical and life-science retractions using journal notices plus Office of Research Integrity reports and other public sources.
- Fang et al. report that secondary-source consultation reclassified 118 of 742 retractions in an earlier study from error to fraud.
- The same paper lists 158 articles whose causes were reclassified because secondary sources clarified the underlying issue.
- Fang et al. conclude that for many retractions, the notice alone is insufficient to determine the true cause, making source reconciliation a core methodological requirement.
- Their evidence also points to [author-written retraction notice bias](../mechanisms/author_written_retraction_notice_bias.md) and [nonretraction integrity warning states](../validations/nonretraction_integrity_warning_states.md) as reasons to keep richer correction-state provenance.

## Caveats

- Secondary sources can be unevenly available across countries, institutions, fields, and time periods.
- Investigation reports may appear after the original notice, so reconciled labels are snapshot-dependent.
- Reconciliation improves cause attribution for known retractions, but it does not detect fraudulent articles that were never retracted.

## Links

- [retraction cause taxonomies](retraction_cause_taxonomies.md)
- [retraction notice transparency](../validations/retraction_notice_transparency.md)
- [author-written retraction notice bias](../mechanisms/author_written_retraction_notice_bias.md)
- [nonretraction integrity warning states](../validations/nonretraction_integrity_warning_states.md)
- [misconduct retraction share](../measures/misconduct_retraction_share.md)
- [unretracted misconduct dark figure](../validations/unretracted_misconduct_dark_figure.md)
- [misconduct detection infrastructure](../mechanisms/misconduct_detection_infrastructure.md)
- [retractions and scientific self-correction](../validations/retractions_self_correction.md)
- [time-to-retraction](../measures/time_to_retraction.md)
- [retraction cascades](../mechanisms/retraction_cascades.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Fang, F. C., Steen, R. G., & Casadevall, A. (2012). Misconduct accounts for the majority of retracted scientific publications. *Proceedings of the National Academy of Sciences*, 109(42), 17028-17033. https://doi.org/10.1073/pnas.1212247109 [OpenAlex: W2097110982; Dimensions: pub.1035913875; WoS: unknown]

## Metadata

- Concept ID: `retraction_source_reconciliation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Fang et al. (2012) (2012)
- Latest seen paper: Fang et al. (2012) (2012)
- Primary reference DOI: `10.1073/pnas.1212247109`
- OpenAlex ID: `W2097110982`
- Dimensions ID: `pub.1035913875`
- SciSciNet ID: `W2097110982`
- Aliases: secondary-source retraction coding; retraction cause reconciliation; notice-source reconciliation; reconciled retraction causes
