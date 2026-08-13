# Coordinated no-repeat discovery regime

## Summary

A coordinated discovery regime records successes and failures and avoids repeated tests, reducing duplicate and failed effort.

## Canonical Form

- Unit of analysis: experiment, failure report, success report, repeated test, knowledge-network edge, or coordination registry.
- Typical representation: simulation regime with public success/failure records and no repeated experiments.
- Mechanism, measurement, or validation target: coordination scenario for evaluating decentralized discovery strategies.
- Empirical signature: discovery costs fall when failures and successes are visible and experiments are not repeated..

## Uses in Science of Science

- Refines experiment-choice simulation method by linking it to [failed experiment publication value](../mechanisms/failed_experiment_publication_value.md) and [unpublished failure censoring](../validations/unpublished_failure_censoring.md).
- Useful as a reusable distinction when [knowledge network search efficiency](../measures/knowledge_network_search_efficiency.md) is analyzed in science-of-science data.
- Adds cross-links to [open science interventions](../validations/open_science_interventions.md) so the motif is not read as an isolated result.

## Operationalization

- Simulate or compare random, inferred, and optimized strategies under a rule where all findings are published.
- Prevent repeated experiments in the simulated regime after success or failure is observed.
- Use the coordinated scenario as an upper-bound benchmark for failure transparency and duplicate suppression.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) shows a coordinated-discovery scenario lowering discovery costs by preventing repeated experiments and making failures visible.
- The motif separates coordination and failure publication from strategy optimization alone.

## Caveats

- Coordination is idealized because real science has noisy measurements, false positives, false negatives, and decentralized incentives.
- Avoiding repeats can reduce robustness checks when replication is valuable.

## Links

- [Failed-experiment publication value](../mechanisms/failed_experiment_publication_value.md)
- [Unpublished-failure censoring](../validations/unpublished_failure_censoring.md)
- [Knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md)
- [Open science interventions](../validations/open_science_interventions.md)
- [Preregistration and registered reports](../validations/preregistration_registered_reports.md)
- [Replication and reproducibility](../validations/replication_reproducibility.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; SciSciNet: W2130145803; WoS: unknown]

## Metadata

- Concept ID: `coordinated_no_repeat_discovery_regime`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: no-repeat experiment coordination; coordinated failure registry; duplicate-experiment suppression
