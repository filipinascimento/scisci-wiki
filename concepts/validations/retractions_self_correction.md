# Retractions and scientific self-correction

## Summary

Retractions and scientific self-correction describe how the literature marks invalid, unreliable, duplicated, or unethical work after publication, and how those corrections reveal failures in research, review, incentives, and post-publication monitoring.

## Canonical Form

- Unit of analysis: retracted article, retraction notice, author group, journal, field, country, citation, or correction event.
- Typical representation: retraction-cause taxonomy, time-to-retraction distribution, citation-after-retraction trace, author/journal retraction network, or country-by-cause profile.
- Mechanism or measurement target: literature correction, misconduct detection, notice transparency, and persistence of invalid claims.
- Empirical signature: rising or field-specific retraction rates, opaque notices, delayed correction, repeated author-level retractions, and continued citation after retraction.

## Uses in Science of Science

- Provides a validation motif for whether science can detect and label invalid claims after they enter the literature.
- Connects incentive systems, [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md), and [responsible metrics](../measures/responsible_metrics.md) to research integrity outcomes.
- Supports audits of citation networks that ask whether downstream papers keep treating retracted work as credible evidence.
- Splits additional correction-system motifs into [multi-cause retraction coding](../methods/multi_cause_retraction_coding.md), [investigation-notice timing gap](investigation_notice_timing_gap.md), [retraction status-marking failure](retraction_status_marking_failure.md), and [claim-level retraction utility](../mechanisms/claim_level_retraction_utility.md).

## Operationalization

- Inputs: retraction notices, bibliographic records, article metadata, misconduct reports, publisher pages, PubMed tags, citation histories, and author/journal identifiers.
- Measures: retraction rate, cause category, [misconduct retraction share](../measures/misconduct_retraction_share.md), time to retraction, post-retraction citation rate, notice informativeness, repeated-retraction concentration, and impact-factor or field gradients.
- Common model forms: event-history models, cause-specific classification, citation-interruption designs, author/journal concentration analysis, [retraction geographic cause profiles](../measures/retraction_geographic_cause_profiles.md), and retraction-notice quality audits.

## Evidence and Validations

- Verified full-text evidence from Fang et al. (2012) classifies 2,047 PubMed-indexed biomedical and life-science retractions and finds that using secondary sources changes many apparent error cases into misconduct cases.
- The same full text reports that only a minority of retractions in that corpus are attributed to error, while misconduct categories dominate known causes; it also shows that fraud-related retractions have increased strongly since the mid-1970s.
- Fang et al. show that retraction notices are often opaque, that fraud cases take longer to retract on average, and that some retracted papers continue to receive citations, making retraction both a correction mechanism and a noisy signal.
- The same evidence motivates narrower motifs for [retraction notice transparency](retraction_notice_transparency.md), [time-to-retraction](../measures/time_to_retraction.md), [post-retraction citation persistence](../measures/post_retraction_citation_persistence.md), and [retraction cascades](../mechanisms/retraction_cascades.md).
- Fang et al. also motivate [retraction source reconciliation](../methods/retraction_source_reconciliation.md), [misconduct retraction share](../measures/misconduct_retraction_share.md), [retraction geographic cause profiles](../measures/retraction_geographic_cause_profiles.md), and [journal-impact-factor retraction gradient](journal_impact_factor_retraction_gradient.md).
- [Retraction cause taxonomies](../methods/retraction_cause_taxonomies.md) is the method layer for turning notice text and secondary sources into analyzable cause categories.
- The same full text also supports a temporal [fraud retraction-rate trend](../measures/fraud_retraction_rate_trend.md), an [unretracted misconduct dark figure](unretracted_misconduct_dark_figure.md), a [misconduct detection infrastructure](../mechanisms/misconduct_detection_infrastructure.md), and a [research integrity intervention portfolio](../methods/research_integrity_intervention_portfolio.md).
- This motif should be read with [analytic flexibility and false-positive risk](analytic_flexibility_false_positives.md): not all unreliable claims become retractions, and retraction counts capture only the visible tail of broader validity problems.

## Caveats

- Retraction counts are detection-dependent and should not be interpreted as direct misconduct prevalence.
- Cause labels depend on notice quality, external investigations, and classification choices.
- Continued citation after retraction can reflect criticism, historical discussion, partial residual use, or failure to notice the retraction.

## Links

- [replication and reproducibility](replication_reproducibility.md)
- [analytic flexibility and false-positive risk](analytic_flexibility_false_positives.md)
- [preregistration and registered reports](preregistration_registered_reports.md)
- [open science interventions](open_science_interventions.md)
- [retraction cause taxonomies](../methods/retraction_cause_taxonomies.md)
- [retraction source reconciliation](../methods/retraction_source_reconciliation.md)
- [retraction notice transparency](retraction_notice_transparency.md)
- [misconduct retraction share](../measures/misconduct_retraction_share.md)
- [fraud retraction-rate trend](../measures/fraud_retraction_rate_trend.md)
- [unretracted misconduct dark figure](unretracted_misconduct_dark_figure.md)
- [misconduct detection infrastructure](../mechanisms/misconduct_detection_infrastructure.md)
- [research integrity intervention portfolio](../methods/research_integrity_intervention_portfolio.md)
- [retraction geographic cause profiles](../measures/retraction_geographic_cause_profiles.md)
- [journal-impact-factor retraction gradient](journal_impact_factor_retraction_gradient.md)
- [time-to-retraction](../measures/time_to_retraction.md)
- [post-retraction citation persistence](../measures/post_retraction_citation_persistence.md)
- [retraction cascades](../mechanisms/retraction_cascades.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [multi-cause retraction coding](../methods/multi_cause_retraction_coding.md)
- [investigation-notice timing gap](investigation_notice_timing_gap.md)
- [retraction status-marking failure](retraction_status_marking_failure.md)
- [claim-level retraction utility](../mechanisms/claim_level_retraction_utility.md)

## References

- Fang, F. C., Steen, R. G., & Casadevall, A. (2012). Misconduct accounts for the majority of retracted scientific publications. *Proceedings of the National Academy of Sciences*, 109(42), 17028-17033. https://doi.org/10.1073/pnas.1212247109 [OpenAlex: W2097110982; Dimensions: pub.1035913875; WoS: unknown]
- Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLOS Medicine*, 2(8), e124. https://doi.org/10.1371/journal.pmed.0020124 [OpenAlex: W2144981148; Dimensions: pub.1012818229; WoS: unknown]
- Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science*, 22(11), 1359-1366. https://doi.org/10.1177/0956797611417632 [OpenAlex: W2161498332; Dimensions: pub.1051875862; WoS: unknown]

## Metadata

- Concept ID: `retractions_self_correction`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Fang et al. (2012) (2012)
- Latest seen paper: Fang et al. (2012) (2012)
- Primary reference DOI: `10.1073/pnas.1212247109`
- OpenAlex ID: `W2097110982`
- Aliases: retraction notices; research misconduct; post-publication correction
