# Altmetric prediction-claim boundary

## Summary

Altmetric prediction-claim boundary is the validation rule that an observed association between online attention and citations should not be described as prediction unless mention timestamps and future citation windows are explicitly tested.

## Canonical Form

- Unit of analysis: paper, altmetric event date, citation window, source-specific count, future citation count, or prediction task.
- Typical representation: association-only label, prospective prediction label, event-before-outcome design, or claim-scope audit.
- Validation target: separate contemporaneous or age-local association from forecasting future scholarly impact.
- Empirical signature: a study can show that higher source counts align with higher citations while lacking the event dates needed for predictive claims.

## Uses in Science of Science

- Qualifies [altmetric-citation association](altmetric_citation_association.md) and [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md).
- Prevents dashboards and rankings from converting early attention into unsupported forecasts.
- Connects altmetric validation to broader [prediction feedback loops](prediction_feedback_loops.md) and [responsible metrics](../measures/responsible_metrics.md).

## Operationalization

- Label studies as association tests unless source events are observed before a defined future citation window.
- Record provider collection date, original event timestamps, publication dates, and citation extraction dates.
- Use holdout windows or prospective designs when testing whether source counts forecast later citations.
- Report when event-origin dates are unavailable and avoid language such as "predicts future citations" for that design.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) compares source-specific altmetric scores with Web of Science citations and introduces timing-aware sign tests.
- The paper explicitly states that it did not test whether high altmetric scores at one point make high future citations more likely because the data did not include origin dates for the scores.
- This makes Thelwall et al. strong evidence for an association design, not a prospective prediction design.

## Caveats

- Lack of prediction evidence does not invalidate altmetrics for public-attention, communication, or case-finding uses.
- Some sources may have predictive value under later datasets with event timestamps and fixed citation windows.
- Prediction designs still need field, journal, age, source-coverage, and feedback-loop controls.

## Links

- [altmetric-citation association](altmetric_citation_association.md)
- [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md)
- [altmetric-citation maturation asymmetry](altmetric_citation_maturation_asymmetry.md)
- [prediction feedback loops](prediction_feedback_loops.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [citation window selection](../methods/citation_window_selection.md)
- [altmetrics](../datasets/altmetrics.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `altmetric_prediction_claim_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: altmetric prediction caveat; association versus prediction; future-citation claim boundary; altmetric forecasting boundary
