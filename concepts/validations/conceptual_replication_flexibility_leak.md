# Conceptual replication flexibility leak

## Summary

Conceptual replication flexibility leak is the validation problem that conceptual replications can appear confirmatory while allowing different analytic and design choices across studies.

## Canonical Form

- Unit of analysis: conceptual replication, study pair, outcome measure, condition comparison, analytic path, or replication claim.
- Typical representation: cross-study flexibility audit, exact-versus-conceptual replication contrast, analytic-path mismatch, or replication-design caveat.
- Validation target: determine whether a replication constrains the same researcher degrees of freedom as the original study.
- Empirical signature: successive studies report the same broad hypothesis but use different measures, condition subsets, covariates, exclusions, or analytic decisions.

## Uses in Science of Science

- Refines [exact-replication flexibility adjudication](../methods/exact_replication_flexibility_adjudication.md) by explaining why exactness matters for flexibility checks.
- Connects [researcher degrees of freedom](researcher_degrees_of_freedom.md) to replication design and [replication and reproducibility](replication_reproducibility.md).
- Supports [exploratory-confirmatory disclosure boundary](exploratory_confirmatory_disclosure_boundary.md) when exploratory findings are followed by confirmation.
- Adds a caveat to claims that multiple conceptually related studies overcome p-hacking concerns.

## Operationalization

- Compare the original and replication study on measures, conditions, exclusions, covariates, sample rules, and analysis code.
- Identify which decisions were held constant and which changed.
- Treat conceptual replications as theory-extension evidence rather than strict tests of analytic flexibility.
- Use exact replications when the goal is to adjudicate whether a flexible analytic path produced a false positive.
- Require disclosed robustness checks when conceptual replications differ on key degrees of freedom.

## Evidence and Validations

- Verified full-text evidence from Simmons et al. (2011) rejects conceptual replications as a sufficient solution to researcher degrees of freedom.
- The paper argues that conceptual replications do not bind researchers to the same analytic decisions across studies.
- Simmons et al. note that authors can report different condition pairs or different measures in different studies while presenting the pattern as replication.
- Their own demonstration uses this issue: the two music studies conceptually align while relying on different outcome and analysis choices.

## Caveats

- Conceptual replications are valuable for testing theory generality and boundary conditions.
- The leak is specific to using conceptual replication as protection against hidden analytic flexibility.
- Exact replications can also be weak if underpowered or if the original effect has changed context.
- Good replication programs often need both exact and conceptual designs, each labeled clearly.

## Links

- [exact-replication flexibility adjudication](../methods/exact_replication_flexibility_adjudication.md)
- [researcher degrees of freedom](researcher_degrees_of_freedom.md)
- [analytic flexibility and false-positive risk](analytic_flexibility_false_positives.md)
- [replication and reproducibility](replication_reproducibility.md)
- [exploratory-confirmatory disclosure boundary](exploratory_confirmatory_disclosure_boundary.md)
- [direct replication protocol](../methods/direct_replication_protocol.md)
- [false-positive literature persistence](../mechanisms/false_positive_literature_persistence.md)

## References

- Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science*, 22(11), 1359-1366. https://doi.org/10.1177/0956797611417632 [OpenAlex: W2161498332; Dimensions: pub.1051875862; WoS: unknown]

## Metadata

- Concept ID: `conceptual_replication_flexibility_leak`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Simmons et al. (2011) (2011)
- Latest seen paper: Simmons et al. (2011) (2011)
- Primary reference DOI: `10.1177/0956797611417632`
- OpenAlex ID: `W2161498332`
- Dimensions ID: `pub.1051875862`
- SciSciNet ID: `W2161498332`
- Aliases: conceptual replication p-hacking leak; conceptual replication flexibility; analytic-path replication leak; exact replication contrast caveat
