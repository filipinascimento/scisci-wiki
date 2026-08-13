# Fraud retraction-rate trend

## Summary

Fraud retraction-rate trend measures how the share or rate of published articles later retracted for fraud or suspected fraud changes over publication cohorts or retraction cohorts.

## Canonical Form

- Unit of analysis: publication year, retraction year, article, retraction cause, field, journal, country, or database snapshot.
- Typical representation: fraud/suspected-fraud retractions divided by total indexed publications, plotted over time with cause-specific curves.
- Measurement target: visible correction events tied to fraud, not the true prevalence of fraud in all publications.
- Empirical signature: fraud-related retractions increase faster than total publication volume or faster than other cause categories.

## Uses in Science of Science

- Adds a temporal measure beneath [retractions and scientific self-correction](../validations/retractions_self_correction.md).
- Refines [misconduct retraction share](misconduct_retraction_share.md) by distinguishing static cause composition from a cohort trend.
- Supports policy evaluation for [research integrity intervention portfolios](../methods/research_integrity_intervention_portfolio.md) and [misconduct detection infrastructure](../mechanisms/misconduct_detection_infrastructure.md).
- Helps separate a rise in detected fraud from a rise in retraction notices, publication volume, plagiarism detection, or duplicate-publication screening.

## Operationalization

- Define the retraction corpus, publication corpus, field boundary, snapshot date, and cause taxonomy.
- Classify fraud and suspected fraud using [retraction source reconciliation](../methods/retraction_source_reconciliation.md), not journal notices alone.
- Compute rates by publication year, retraction year, or fixed publication cohorts, and state which denominator is used.
- Compare fraud-related curves with error, plagiarism, duplicate publication, unknown, and all-retraction curves.
- Report lag sensitivity because recent publication years have had less time to be retracted.

## Evidence and Validations

- Verified full-text evidence from Fang, Steen, and Casadevall (2012) reports that fraud or suspected fraud retractions as a percentage of total articles increased nearly 10-fold since 1975 in their PubMed-indexed biomedical corpus.
- The same full text states that the recent increase in fraud retractions cannot be explained only by growth in the number of research publications.
- Fang et al. show that retraction increases were cause-specific: fraud rose dramatically, error rose more modestly, and plagiarism plus duplicate-publication retractions appeared mainly after 2005.
- This makes the rate trend a cause-specific integrity signal, while still requiring the [unretracted misconduct dark figure](../validations/unretracted_misconduct_dark_figure.md) caveat.

## Caveats

- A rising fraud retraction rate can reflect improved detection rather than more fraud.
- Retraction lag makes recent publication cohorts right-censored.
- Database coverage, notice practices, source reconciliation, and cause definitions can change over time.

## Links

- [retractions and scientific self-correction](../validations/retractions_self_correction.md)
- [misconduct retraction share](misconduct_retraction_share.md)
- [retraction cause taxonomies](../methods/retraction_cause_taxonomies.md)
- [retraction source reconciliation](../methods/retraction_source_reconciliation.md)
- [time-to-retraction](time_to_retraction.md)
- [unretracted misconduct dark figure](../validations/unretracted_misconduct_dark_figure.md)
- [misconduct detection infrastructure](../mechanisms/misconduct_detection_infrastructure.md)
- [research integrity intervention portfolio](../methods/research_integrity_intervention_portfolio.md)
- [responsible metrics](responsible_metrics.md)

## References

- Fang, F. C., Steen, R. G., & Casadevall, A. (2012). Misconduct accounts for the majority of retracted scientific publications. *Proceedings of the National Academy of Sciences*, 109(42), 17028-17033. https://doi.org/10.1073/pnas.1212247109 [OpenAlex: W2097110982; Dimensions: pub.1035913875; WoS: unknown]

## Metadata

- Concept ID: `fraud_retraction_rate_trend`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Fang et al. (2012) (2012)
- Latest seen paper: Fang et al. (2012) (2012)
- Primary reference DOI: `10.1073/pnas.1212247109`
- OpenAlex ID: `W2097110982`
- Dimensions ID: `pub.1035913875`
- SciSciNet ID: `W2097110982`
- Aliases: fraud retraction trend; fraud retraction rate; cause-specific retraction trend; fraud-correction time series
