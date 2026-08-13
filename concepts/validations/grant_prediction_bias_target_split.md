# Grant-prediction bias/target split

## Summary

Predicting grant outcomes is not the same as predicting scientific merit when observed funding decisions encode demographic or interdisciplinary review bias.

## Canonical Form

- Unit of analysis: grant proposal, award outcome, review score, applicant feature, project merit, or prediction label.
- Typical representation: target split between funding decision labels and scientific-quality labels.
- Mechanism, measurement, or validation target: label bias in grant prediction models.
- Empirical signature: features predict award outcomes partly because they predict biased gatekeeping rather than later scientific value..

## Uses in Science of Science

- Adds prediction-label caveats to [NIH R01 award disparities](nih_r01_award_disparities.md).
- Connects [grant peer-review value-added](grant_peer_review_value_added.md) to target validation.
- Relevant for interdisciplinary and novelty review discounts.

## Operationalization

- Report separate targets for award receipt, review score, later output, and proposal merit.
- Audit whether demographic and interdisciplinarity features predict biased gatekeeping rather than project quality.
- Evaluate models against later outputs where feasible.

## Evidence and Validations

- Verified full-text evidence from Clauset et al. (2017) summarizes evidence that proposals led by female or nonwhite investigators and proposals focused on interdisciplinary work are less likely to be funded.

## Caveats

- Award outcome should not be treated as a clean quality label.
- Later output labels are also shaped by funding treatment and opportunity effects.

## Links

- [NIH R01 award disparities](nih_r01_award_disparities.md)
- [Grant peer-review value-added](grant_peer_review_value_added.md)
- [Right-tail novelty review discount](../mechanisms/right_tail_novelty_review_discount.md)
- [Interdisciplinarity](../mechanisms/interdisciplinarity.md)
- [Interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md)
- [Funding selection-treatment split](../methods/funding_selection_treatment_split.md)

## References

- Clauset, A., Larremore, D. B., & Sinatra, R. (2017). Data-driven predictions in the science of science. *Science*, 355(6324), 477-480. https://doi.org/10.1126/science.aal4217 [OpenAlex: W2585057539; Dimensions: pub.1083524092; WoS: unknown]

## Metadata

- Concept ID: `grant_prediction_bias_target_split`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2017) (2017)
- Latest seen paper: Clauset et al. (2017) (2017)
- Primary reference DOI: `10.1126/science.aal4217`
- OpenAlex ID: `W2585057539`
- Dimensions ID: `pub.1083524092`
- SciSciNet ID: `W2585057539`
- Aliases: grant outcome versus merit split; funding-label bias audit; biased grant target validation
