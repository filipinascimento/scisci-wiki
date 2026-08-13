# Replication-as-preregistration fast workflows

## Summary

Replication-as-preregistration fast workflows convert an exploratory study into a preregistered prediction by rerunning the design and analysis script on a new rapid replication.

## Canonical Form

- Unit of analysis: exploratory experiment, rapid replication, analysis script, preregistration, or high-throughput workflow.
- Typical representation: exploration-to-replication pipeline, original script as preregistration, or fast confirmatory rerun.
- Method target: preserve exploration while producing a new-data prediction when data acquisition is cheap.
- Empirical signature: initial findings are labeled exploratory, and the same design or script becomes the prediction for a subsequent experiment.

## Uses in Science of Science

- Connects [replication and reproducibility](../validations/replication_reproducibility.md) to preregistration workflows.
- Complements [exploration-to-prediction cross-validation](exploration_to_prediction_cross_validation.md) by using a new experiment rather than a holdout split.
- Gives high-throughput laboratories a route to confirmatory evidence without slowing every exploratory run.
- Helps preserve the [prediction-postdiction boundary](../validations/prediction_postdiction_boundary.md) after unexpected discoveries.

## Operationalization

- Treat the initial fast-acquisition study as exploratory.
- Preserve the design, materials, analysis script, and outcome definitions that generated the candidate finding.
- Before collecting the next dataset, register the repeated design and analysis as the prediction.
- Interpret the replication outcome as the confirmatory test and the original outcome as hypothesis generation.

## Evidence and Validations

- Verified full-text evidence from Nosek et al. (2018) describes scenarios where data acquisition is so simple that documentation can interfere with efficiency.
- The paper argues that researchers can achieve confirmatory research through replication in those settings.
- Nosek et al. state that all initial experiments can be treated as exploratory and, when something interesting is observed, the initial design and analysis script can become the preregistration for testing a prediction by running the experiment again.

## Caveats

- The replication must be sufficiently independent for prediction; rerunning on the same data is not enough.
- The design and analysis script should be preserved without outcome-informed changes unless those changes are separately registered.
- Fast workflows still need all attempted replications reported to avoid selective visibility.

## Links

- [replication and reproducibility](../validations/replication_reproducibility.md)
- [exploration-to-prediction cross-validation](exploration_to_prediction_cross_validation.md)
- [prediction-postdiction boundary](../validations/prediction_postdiction_boundary.md)
- [preregistration and registered reports](../validations/preregistration_registered_reports.md)
- [parameterized preregistration templates](parameterized_preregistration_templates.md)
- [preregistered test-denominator visibility](../validations/preregistered_test_denominator_visibility.md)

## References

- Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114 [OpenAlex: W2779812635; Dimensions: pub.1101502429; SciSciNet: W2779812635; WoS: unknown]

## Metadata

- Concept ID: `replication_as_preregistration_fast_workflows`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Nosek et al. (2018) (2018)
- Latest seen paper: Nosek et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1708274114`
- OpenAlex ID: `W2779812635`
- Dimensions ID: `pub.1101502429`
- SciSciNet ID: `W2779812635`
- Aliases: replication-as-preregistration; fast replication preregistration workflow; exploratory-to-replication preregistration; analysis-script replication preregistration
