# Exploration-to-prediction cross-validation

## Summary

Exploration-to-prediction cross-validation is the method of using one portion of data to discover patterns or generate hypotheses, then sealing a held-out portion for a preregistered test of the discovery output.

## Canonical Form

- Unit of analysis: dataset, holdout split, discovery model, hypothesis, preregistered output, or validation sample.
- Typical representation: train/test split, sealed holdout dataset, cross-validation plan, discovery-to-confirmation workflow, or split-sample preregistration.
- Method target: preserve the value of exploratory discovery while creating a genuine prediction test on data not used to generate the claim.
- Empirical signature: exploratory analyses are completed and documented before the held-out data are inspected for the confirmatory test.

## Uses in Science of Science

- Converts discoveries near the [prediction-postdiction boundary](../validations/prediction_postdiction_boundary.md) into testable predictions without devaluing exploration.
- Complements [partial-blinding and incremental preregistration](partial_blinding_incremental_preregistration.md) for preexisting or large multivariate datasets.
- Provides a design response to [p-value diagnosticity under forking paths](../validations/p_value_diagnosticity_forking_paths.md), where exploratory p-values have unknown diagnosticity.
- Supports open-science workflows that distinguish exploratory discovery from confirmatory validation.

## Operationalization

- Reserve a holdout sample, future wave, or otherwise uninspected data subset before exploration begins.
- Use the discovery subset to generate models, hypotheses, features, or decision rules.
- Preregister the discovery output and the exact validation analysis before opening the holdout subset.
- Report exploratory and confirmatory results separately.
- When repeated cross-validation is used, account for the number of modeling decisions and validation attempts.

## Evidence and Validations

- Verified full-text evidence from Nosek et al. (2018) argues that discovery science is valuable but becomes misleading when exploratory analyses are dressed as theory tests.
- Nosek et al. note that p-values in discovery contexts have unknown diagnosticity because the same data can shape the hypothesis and analysis path.
- The same full text proposes cross-validation or data splitting as a way to explore one portion of data and then test the resulting prediction on a held-out portion.
- This method preserves the roles of both postdiction and prediction by making the handoff between them explicit.

## Caveats

- Holdouts can be compromised if outcomes, summaries, or highly correlated variables are inspected during exploration.
- Cross-validation does not solve publication bias if only successful validation splits are reported.
- Small datasets may not support both discovery and validation without severe power loss.

## Links

- [prediction-postdiction boundary](../validations/prediction_postdiction_boundary.md)
- [partial-blinding and incremental preregistration](partial_blinding_incremental_preregistration.md)
- [preregistration and registered reports](../validations/preregistration_registered_reports.md)
- [p-value diagnosticity under forking paths](../validations/p_value_diagnosticity_forking_paths.md)
- [preregistration specificity gradient](../validations/preregistration_specificity_gradient.md)
- [exploratory-confirmatory disclosure boundary](../validations/exploratory_confirmatory_disclosure_boundary.md)
- [replication and reproducibility](../validations/replication_reproducibility.md)

## References

- Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114 [OpenAlex: W2779812635; Dimensions: pub.1101502429; WoS: unknown]

## Metadata

- Concept ID: `exploration_to_prediction_cross_validation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Nosek et al. (2018) (2018)
- Latest seen paper: Nosek et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1708274114`
- OpenAlex ID: `W2779812635`
- Dimensions ID: `pub.1101502429`
- SciSciNet ID: `W2779812635`
- Aliases: holdout preregistration; exploratory-to-confirmatory split; sealed holdout prediction; cross-validated preregistration
