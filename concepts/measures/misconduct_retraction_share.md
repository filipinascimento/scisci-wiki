# Misconduct retraction share

## Summary

Misconduct retraction share is the fraction of retracted papers attributed to misconduct-related causes, including fraud or suspected fraud, plagiarism, and duplicate publication.

## Canonical Form

- Unit of analysis: retracted paper, corpus of retractions, field, country, journal, year, or cause category.
- Typical representation: proportion of retractions caused by misconduct, fraud/suspected-fraud share, error share, or cause-specific retraction table.
- Measurement target: cause composition among known retractions, not the prevalence of misconduct in all published papers.
- Empirical signature: reconciled cause coding can reveal a larger misconduct component than notice-only coding.

## Uses in Science of Science

- Provides a compact measure for [retractions and scientific self-correction](../validations/retractions_self_correction.md).
- Depends on [retraction source reconciliation](../methods/retraction_source_reconciliation.md) and [retraction cause taxonomies](../methods/retraction_cause_taxonomies.md).
- Helps separate visible misconduct from broader [publication bias and selective reporting](../mechanisms/publication_bias_selective_reporting.md) or other unreliability.
- Connects correction-system evidence to [responsible metrics](responsible_metrics.md) without treating retraction counts as direct misconduct prevalence.
- Should be interpreted with the [unretracted misconduct dark figure](../validations/unretracted_misconduct_dark_figure.md), because unretracted fraud is outside the denominator.

## Operationalization

- Define a retraction corpus and source snapshot.
- Code each retraction into mutually documented or multi-label cause categories.
- Aggregate categories such as fraud, suspected fraud, plagiarism, and duplicate publication into a misconduct-related numerator.
- Report the denominator, unknown share, source-reconciliation rules, and whether duplicate publication is included in misconduct.
- Compare misconduct share by year, field, journal, country, or source database only when cause-coding rules are consistent.
- Report whether misconduct is concentrated in repeated groups through [author-group retraction concentration](author_group_retraction_concentration.md).
- Use [cause-specific correction priority](../validations/cause_specific_correction_priority.md) before interpreting cause shares as intervention priorities.

## Evidence and Validations

- Verified full-text evidence from Fang, Steen, and Casadevall (2012) analyzes 2,047 PubMed-indexed retractions and reports that 21.3% were attributed to error.
- The same study reports that 67.4% were attributed to misconduct-related categories: fraud or suspected fraud, duplicate publication, and plagiarism.
- Fang et al. report fraud or suspected fraud as the most common reason, accounting for 43.4% of retractions in their corpus.
- The paper argues that incomplete or misleading notices led earlier studies to underestimate fraud, so the misconduct share depends strongly on source reconciliation.
- Fang et al. also warn that not all suspected fraudulent articles are retracted, making retraction shares lower-bound correction indicators rather than misconduct-prevalence estimates.

## Caveats

- This is a share of retractions, not a share of all publications.
- Undetected or unretracted misconduct makes the true misconduct prevalence unknowable from retraction data alone.
- The numerator is sensitive to whether suspected fraud and duplicate publication are grouped with misconduct.

## Links

- [retractions and scientific self-correction](../validations/retractions_self_correction.md)
- [retraction source reconciliation](../methods/retraction_source_reconciliation.md)
- [retraction cause taxonomies](../methods/retraction_cause_taxonomies.md)
- [author-group retraction concentration](author_group_retraction_concentration.md)
- [cause-specific correction priority](../validations/cause_specific_correction_priority.md)
- [retraction notice transparency](../validations/retraction_notice_transparency.md)
- [unretracted misconduct dark figure](../validations/unretracted_misconduct_dark_figure.md)
- [fraud retraction-rate trend](fraud_retraction_rate_trend.md)
- [retraction geographic cause profiles](retraction_geographic_cause_profiles.md)
- [journal-impact-factor retraction gradient](../validations/journal_impact_factor_retraction_gradient.md)
- [responsible metrics](responsible_metrics.md)

## References

- Fang, F. C., Steen, R. G., & Casadevall, A. (2012). Misconduct accounts for the majority of retracted scientific publications. *Proceedings of the National Academy of Sciences*, 109(42), 17028-17033. https://doi.org/10.1073/pnas.1212247109 [OpenAlex: W2097110982; Dimensions: pub.1035913875; WoS: unknown]

## Metadata

- Concept ID: `misconduct_retraction_share`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Fang et al. (2012) (2012)
- Latest seen paper: Fang et al. (2012) (2012)
- Primary reference DOI: `10.1073/pnas.1212247109`
- OpenAlex ID: `W2097110982`
- Dimensions ID: `pub.1035913875`
- SciSciNet ID: `W2097110982`
- Aliases: misconduct share of retractions; fraud retraction share; retraction cause composition; error versus misconduct retractions
