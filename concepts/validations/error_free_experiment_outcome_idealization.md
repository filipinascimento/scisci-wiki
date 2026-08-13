# Error-free experiment-outcome idealization

## Summary

Error-free experiment-outcome idealization is the modeling assumption that simulated experiments have perfectly observed success and failure, with no false positives or false negatives.

## Canonical Form

- Unit of analysis: simulated experiment, candidate edge, target network, observed outcome, false positive, false negative, or discovery policy.
- Typical representation: perfect target-network oracle, binary success/failure edge label, or outcome-noise sensitivity assumption.
- Validation target: whether conclusions from discovery simulations depend on assuming that experimental outcomes are observed without error.
- Empirical signature: relaxing the assumption would require explicit false-positive, false-negative, and reversal processes.

## Uses in Science of Science

- Qualifies [optimal knowledge-network search simulation](../methods/optimal_knowledge_network_search_simulation.md).
- Connects [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md) to reliability questions about extracted and observed edges.
- Links search policy to [positive predictive value of findings](../measures/positive_predictive_value_findings.md), because discovery efficiency changes when positive results can be false.
- Provides a bridge between exploration simulations and [replication and reproducibility](replication_reproducibility.md).

## Operationalization

- Identify whether a simulation treats the target network as truth and observed outcomes as error-free.
- Specify possible false positives, false negatives, noisy measurements, ambiguous relation types, and later reversals.
- Run sensitivity checks in which successful experiments can be spurious and failed experiments can miss true edges.
- Separate extraction error in the observed corpus from experimental error in the underlying science.
- Track whether publishing failures remains beneficial when outcome labels are noisy.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky, Foster, Foster, and Evans (2015) defines simulated experiments as succeeding when they propose relationships realized in the empirical sample network and failing otherwise.
- The paper states that, in its simplest scenario, failures are not published.
- Rzhetsky et al. explicitly assume that both success and failure are error free, with no false positives or false negatives.
- The authors note that relaxing this assumption would add considerable complexity and require additional modeling assumptions.

## Caveats

- A corpus-derived target network is not the same as ground truth.
- Biomedical relationships can be context-dependent, conditional, later refuted, or missing because they were never tested.
- False positives can make apparent discovery efficient in the short run while reducing long-run reliability.
- False negatives can make promising distant search look inefficient.

## Links

- [optimal knowledge-network search simulation](../methods/optimal_knowledge_network_search_simulation.md)
- [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md)
- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [failed-experiment publication value](../mechanisms/failed_experiment_publication_value.md)
- [positive predictive value of findings](../measures/positive_predictive_value_findings.md)
- [replication and reproducibility](replication_reproducibility.md)
- [publication bias and selective reporting](../mechanisms/publication_bias_selective_reporting.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; SciSciNet: W2130145803]

## Metadata

- Concept ID: `error_free_experiment_outcome_idealization`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: error-free discovery assumption; false-positive-free simulation; false-negative-free simulation; perfect experiment outcome idealization
