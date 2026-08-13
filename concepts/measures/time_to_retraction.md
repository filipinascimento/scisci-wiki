# Time-to-retraction

## Summary

Time-to-retraction measures the elapsed time between publication and formal retraction of a scientific work.

## Canonical Form

- Unit of analysis: retracted article, retraction notice, author group, journal, field, cause category, or correction event.
- Typical representation: duration in months or years, survival curve, event-history model, or cause-specific mean/median time.
- Mechanism or measurement target: speed of post-publication correction and delay in removing invalid claims from the active literature.
- Empirical signature: publication dates and retraction dates produce a measurable correction lag.

## Uses in Science of Science

- Quantifies one part of [retractions and scientific self-correction](../validations/retractions_self_correction.md).
- Helps compare correction delays by cause, journal, field, impact, country, or author group.
- Supports citation-risk analysis because longer lags expose more time for invalid claims to be cited and reused.
- Provides an outcome for interventions that try to accelerate detection, investigation, and correction.

## Operationalization

- Extract publication date and retraction date from bibliographic records or publisher notices.
- Compute elapsed months or years; keep cause categories and notice-transparency flags as covariates.
- Analyze cause-specific distributions rather than only a pooled mean.
- Treat expressions of concern and partial retractions separately unless the analysis explicitly combines correction events.
- Pair time-to-retraction with [journal-impact-factor retraction gradient](../validations/journal_impact_factor_retraction_gradient.md) when testing whether visibility affects correction speed.

## Evidence and Validations

- Verified full-text evidence from Fang et al. (2012) reports mean time-to-retraction by cause for 2,047 PubMed-indexed retracted articles.
- The paper finds that articles retracted because of fraud took substantially longer to retract on average than those retracted for error, plagiarism, duplicate publication, or other causes.
- Fang et al. report a gradual trend toward increasing time-to-retraction over time.
- The paper links long fraud-related delays partly to lengthy investigative processes and author-level reviews that can expose additional fraudulent papers.
- Fang et al. also report that impact factor correlated inversely with time-to-retraction for fraud cases, although the effect was modest.
- Their discussion links long fraud-related delays to investigation processes and author-output reviews, connecting the measure to [misconduct detection infrastructure](../mechanisms/misconduct_detection_infrastructure.md).

## Caveats

- Date precision can vary across records and notices.
- Longer time-to-retraction can reflect investigation rigor, not only poor correction systems.
- Cause categories and notice opacity affect the interpretation of time-to-retraction comparisons.

## Links

- [retractions and scientific self-correction](../validations/retractions_self_correction.md)
- [retraction cause taxonomies](../methods/retraction_cause_taxonomies.md)
- [retraction notice transparency](../validations/retraction_notice_transparency.md)
- [post-retraction citation persistence](post_retraction_citation_persistence.md)
- [retraction cascades](../mechanisms/retraction_cascades.md)
- [misconduct detection infrastructure](../mechanisms/misconduct_detection_infrastructure.md)
- [journal-impact-factor retraction gradient](../validations/journal_impact_factor_retraction_gradient.md)
- [responsible metrics](responsible_metrics.md)

## References

- Fang, F. C., Steen, R. G., & Casadevall, A. (2012). Misconduct accounts for the majority of retracted scientific publications. *Proceedings of the National Academy of Sciences*, 109(42), 17028-17033. https://doi.org/10.1073/pnas.1212247109 [OpenAlex: W2097110982; Dimensions: pub.1035913875; WoS: unknown]

## Metadata

- Concept ID: `time_to_retraction`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Fang et al. (2012) (2012)
- Latest seen paper: Fang et al. (2012) (2012)
- Primary reference DOI: `10.1073/pnas.1212247109`
- OpenAlex ID: `W2097110982`
- Aliases: retraction lag; correction lag; months to retract; publication-to-retraction interval
