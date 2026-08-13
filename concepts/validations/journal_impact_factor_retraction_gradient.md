# Journal-impact-factor retraction gradient

## Summary

The journal-impact-factor retraction gradient is the empirical association between journal impact factor and retraction counts, rates, causes, or correction speed.

## Canonical Form

- Unit of analysis: journal, retracted paper, cause category, impact-factor bin, field, or publication year.
- Typical representation: impact-factor correlation, cause-specific retraction rate, high-impact journal enrichment, or time-to-retraction by journal prestige.
- Validation target: test whether prestige and visibility are associated with correction patterns, detection, or incentives.
- Empirical signature: high-impact journals can show more retractions for fraud or error, while other causes may follow different journal distributions.

## Uses in Science of Science

- Provides a correction-system validation for [journal impact factor](../measures/journal_impact_factor.md) and [responsible metrics](../measures/responsible_metrics.md).
- Links [retractions and scientific self-correction](retractions_self_correction.md) to incentive and visibility mechanisms.
- Helps interpret [misconduct retraction share](../measures/misconduct_retraction_share.md) because cause composition varies across journal strata.
- Complements [time-to-retraction](../measures/time_to_retraction.md) by asking whether high-visibility journals retract faster or more often.

## Operationalization

- Build a journal-level table of publications, retractions, cause labels, impact factors, and time-to-retraction.
- Compare retraction counts or rates across impact-factor bins and cause categories.
- Use field, year, publication volume, and database coverage controls where possible.
- Interpret associations as mixtures of visibility, scrutiny, incentive, field composition, and editorial practice rather than direct causal effects.

## Evidence and Validations

- Verified full-text evidence from Fang, Steen, and Casadevall (2012) reports a highly significant relationship between journal impact factor and retractions due to fraud or suspected fraud and error in their PubMed retraction corpus.
- Fang et al. find only a slight relationship between impact factor and retractions due to plagiarism or duplicate publication.
- The same paper reports that the mean impact factor of journals retracting papers for fraud, suspected fraud, or error differed from journals retracting papers for plagiarism or duplicate publication.
- Fang et al. discuss two possible mechanisms: high-impact work receives greater scrutiny, and prestigious venues create strong incentives that can encourage excessive haste or unethical practices.

## Caveats

- Impact factor can proxy for visibility, field, publication volume, editorial practices, and incentive intensity at the same time.
- Retraction counts should be normalized by publication volume before comparing journals.
- Cause coding and notice opacity can vary by journal and publisher.

## Links

- [journal impact factor](../measures/journal_impact_factor.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [retractions and scientific self-correction](retractions_self_correction.md)
- [retraction cause taxonomies](../methods/retraction_cause_taxonomies.md)
- [retraction source reconciliation](../methods/retraction_source_reconciliation.md)
- [misconduct retraction share](../measures/misconduct_retraction_share.md)
- [time-to-retraction](../measures/time_to_retraction.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)

## References

- Fang, F. C., Steen, R. G., & Casadevall, A. (2012). Misconduct accounts for the majority of retracted scientific publications. *Proceedings of the National Academy of Sciences*, 109(42), 17028-17033. https://doi.org/10.1073/pnas.1212247109 [OpenAlex: W2097110982; Dimensions: pub.1035913875; WoS: unknown]

## Metadata

- Concept ID: `journal_impact_factor_retraction_gradient`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Fang et al. (2012) (2012)
- Latest seen paper: Fang et al. (2012) (2012)
- Primary reference DOI: `10.1073/pnas.1212247109`
- OpenAlex ID: `W2097110982`
- Dimensions ID: `pub.1035913875`
- SciSciNet ID: `W2097110982`
- Aliases: retraction index; impact-factor retraction association; journal prestige retraction gradient; high-impact journal retractions
