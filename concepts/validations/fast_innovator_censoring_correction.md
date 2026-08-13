# Fast-innovator censoring correction

## Summary

Fast-innovator censoring correction restricts consecutive-patent analyses to comparable application and grant windows so late-period truncation does not mechanically change observed field-switching.

## Canonical Form

- Unit of analysis: inventor, adjacent patent pair, application window, grant window, censoring rule, or field-jump estimate.
- Typical representation: fixed maximum lag between consecutive applications plus a grant-observation restriction.
- Validation target: prevent end-of-panel censoring from biasing specialization trends.
- Empirical signature: field-jump trends persist after limiting the panel to inventor pairs observable under the same follow-up window.

## Uses in Science of Science

- Validates [patent field-jump specialization](../measures/patent_field_jump_specialization.md).
- Depends on [inventor application time lag](../measures/inventor_application_time_lag.md) and [patent application-year time anchor](../methods/patent_application_year_time_anchor.md).
- Provides a general right-censoring motif for longitudinal patent and career-history panels.

## Operationalization

- Define adjacent patent applications for each inventor.
- Set a fixed maximum interval, such as requiring the next application within three years.
- Exclude late-period observations where the second application or grant could not yet be observed.
- Re-estimate field-jump or productivity trends under the corrected window.
- Compare corrected and uncorrected estimates to assess truncation sensitivity.

## Evidence and Validations

- Verified full-text evidence from Jones (2009) notes that moving closer to the end of the patent data can mechanically change observed specialization because later second patents have less time to appear.
- Jones corrects this by restricting consecutive applications to a three-year window and further requiring both patents to be granted within a comparable observation period.
- The paper reports that the specialization trend persists under this censoring correction.

## Caveats

- Short windows favor faster repeat inventors and may exclude slower innovation rhythms.
- Grant delays can vary by technology area and period.
- The correction addresses observation-window bias but not all name-matching or technology-classification error.

## Links

- [patent field-jump specialization](../measures/patent_field_jump_specialization.md)
- [inventor application time lag](../measures/inventor_application_time_lag.md)
- [patent application-year time anchor](../methods/patent_application_year_time_anchor.md)
- [solo-inventor specialization identifiability](../methods/solo_inventor_specialization_identifiability.md)
- [burden of knowledge](../mechanisms/burden_of_knowledge.md)

## References

- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; SciSciNet: W3124253902; WoS: unknown]

## Metadata

- Concept ID: `fast_innovator_censoring_correction`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Jones (2009) (2009)
- Latest seen paper: Jones (2009) (2009)
- Primary reference DOI: `10.1111/j.1467-937x.2008.00531.x`
- OpenAlex ID: `W3124253902`
- Dimensions ID: `pub.1061936767`
- SciSciNet ID: `W3124253902`
- Aliases: three-year patent follow-up correction; consecutive-patent censoring correction; end-of-panel field-jump correction; fast-inventor truncation audit
