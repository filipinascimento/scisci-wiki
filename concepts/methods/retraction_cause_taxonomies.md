# Retraction cause taxonomies

## Summary

Retraction cause taxonomies classify why papers are retracted so that correction events can be analyzed as evidence about error, misconduct, publication practices, and post-publication governance.

## Canonical Form

- Unit of analysis: retracted paper, retraction notice, investigation report, journal, author group, field, or cause label.
- Typical representation: cause codebook, notice-coded table, secondary-source reconciliation, time-to-retraction distribution, or cause-specific trend.
- Mechanism or measurement target: coding correction events into categories such as error, fraud, suspected fraud, plagiarism, duplicate publication, journal error, authorship dispute, other, or unknown.
- Empirical signature: cause-specific retraction rates, notice opacity, reclassification after secondary-source review, and different temporal/geographic/journal patterns by cause.

## Uses in Science of Science

- Provides the method layer underneath [retractions and scientific self-correction](../validations/retractions_self_correction.md).
- Helps separate error, misconduct, duplicate publication, plagiarism, and unclear notices before using retractions as a research-integrity indicator.
- Links correction data to [responsible metrics](../measures/responsible_metrics.md), because retraction counts are detection- and classification-dependent.
- Supports [open science interventions](../validations/open_science_interventions.md) that target notice transparency, centralized misconduct data, and uniform correction standards.
- Feeds cause-specific trend measures such as [fraud retraction-rate trend](../measures/fraud_retraction_rate_trend.md) while retaining the [unretracted misconduct dark figure](../validations/unretracted_misconduct_dark_figure.md) caveat.

## Operationalization

- Build a corpus of retracted publications from PubMed, Crossref, Retraction Watch, publisher notices, or other bibliographic sources.
- Extract retraction notices and code explicit reason statements.
- Reconcile ambiguous notices with secondary sources such as institutional investigation reports, Office of Research Integrity findings, Retraction Watch posts, news reports, and author responses.
- Preserve notice-only and reconciled labels using [retraction source reconciliation](retraction_source_reconciliation.md).
- Use multiple coders or adjudication to resolve classification disagreements.
- Report unknown and opaque notices rather than forcing all events into specific causes.

## Evidence and Validations

- Verified full-text evidence from Fang et al. (2012) classifies 2,047 PubMed-indexed biomedical and life-science retractions as of May 3, 2012.
- Fang et al. code causes including documented fraud, suspected fraud, plagiarism, duplicate publication, error, unknown, and other reasons such as journal error or authorship dispute.
- The full text shows why notice-only coding can be misleading: consulting Office of Research Integrity reports and other public sources reclassified many apparent error cases as fraud.
- Fang et al. report that only 21.3% of retractions in the corpus were attributed to error, while 67.4% were attributed to misconduct categories including fraud or suspected fraud, duplicate publication, and plagiarism.
- The paper also shows cause-specific patterns by time, geography, journal impact factor, time to retraction, repeated author groups, and citation persistence.
- These cause-specific patterns motivate narrower pages for [misconduct retraction share](../measures/misconduct_retraction_share.md), [retraction geographic cause profiles](../measures/retraction_geographic_cause_profiles.md), and [journal-impact-factor retraction gradient](../validations/journal_impact_factor_retraction_gradient.md).
- [Retraction notice transparency](../validations/retraction_notice_transparency.md) is the notice-quality layer that determines how much cause information can be trusted before secondary-source reconciliation.
- Fang et al.'s discussion of unretracted suspected fraud also motivates [unretracted misconduct dark figure](../validations/unretracted_misconduct_dark_figure.md) as a boundary on any cause taxonomy built only from formal retractions.

## Caveats

- Retraction cause taxonomies measure detected and classified correction events, not the true prevalence of misconduct or error.
- Retraction notices can be opaque, incomplete, strategic, or written before investigations are complete.
- Cause categories can overlap, and some papers have multiple reasons for retraction.
- Cross-field comparisons require consistent source coverage and cause definitions.

## Links

- [retractions and scientific self-correction](../validations/retractions_self_correction.md)
- [retraction source reconciliation](retraction_source_reconciliation.md)
- [open science interventions](../validations/open_science_interventions.md)
- [replication and reproducibility](../validations/replication_reproducibility.md)
- [retraction notice transparency](../validations/retraction_notice_transparency.md)
- [time-to-retraction](../measures/time_to_retraction.md)
- [retraction cascades](../mechanisms/retraction_cascades.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [journal-impact-factor retraction gradient](../validations/journal_impact_factor_retraction_gradient.md)
- [misconduct retraction share](../measures/misconduct_retraction_share.md)
- [fraud retraction-rate trend](../measures/fraud_retraction_rate_trend.md)
- [unretracted misconduct dark figure](../validations/unretracted_misconduct_dark_figure.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)

## References

- Fang, F. C., Steen, R. G., & Casadevall, A. (2012). Misconduct accounts for the majority of retracted scientific publications. *Proceedings of the National Academy of Sciences*, 109(42), 17028-17033. https://doi.org/10.1073/pnas.1212247109 [OpenAlex: W2097110982; Dimensions: pub.1035913875; WoS: unknown]

## Metadata

- Concept ID: `retraction_cause_taxonomies`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Fang et al. (2012) (2012)
- Latest seen paper: Fang et al. (2012) (2012)
- Primary reference DOI: `10.1073/pnas.1212247109`
- OpenAlex ID: `W2097110982`
- Dimensions ID: `pub.1035913875`
- SciSciNet ID: `W2097110982`
- Aliases: retraction classification; misconduct taxonomy; error fraud plagiarism duplicate publication; notice coding
