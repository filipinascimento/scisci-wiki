# Longitudinal partial-blinding decay

## Summary

Longitudinal partial-blinding decay is the validation boundary where preregistration blinding weakens as related waves, variables, or interim data make future outcomes increasingly inferable.

## Canonical Form

- Unit of analysis: longitudinal dataset, preexisting dataset, outcome wave, correlated variable, preregistration stage, or statistical test.
- Typical representation: blinding-risk audit, data-knownness matrix, temporal leakage note, or partial-blinding caveat.
- Validation target: determine whether a preregistered plan was truly blind to the outcome information needed for prediction.
- Empirical signature: later outcomes or target variables can be partially anticipated from earlier observations or related measures.

## Uses in Science of Science

- Adds a temporal leakage caveat to [partial-blinding and incremental preregistration](../methods/partial_blinding_incremental_preregistration.md).
- Refines [preexisting-data knowledge-provenance audit](../methods/preexisting_data_knowledge_provenance_audit.md) for panel and multivariate datasets.
- Helps evaluate claims that preregistration with existing or accumulating data preserves confirmatory status.
- Supports transparent distinction between full blinding, partial blinding, and outcome-informed analysis planning.

## Operationalization

- List which data waves, variables, summaries, and related outcomes were known at preregistration time.
- Assess whether known observations make target outcomes inferable.
- Record the proportion of relevant data already observed for each planned statistical test.
- Interpret preregistered analyses with reduced evidentiary strength when blinding has decayed.

## Evidence and Validations

- Verified full-text evidence from Nosek et al. (2018) states that effective blinding for a statistical test depends partly on what proportion of relevant data have been observed.
- The paper argues that partial blinding via preregistration offers more protection than no blinding, while acknowledging that it can fall short of the ideal.
- In the same discussion, Nosek et al. describe sequential preregistration strategies for evaluating data features without revealing outcome-relevant information.

## Caveats

- Blinding decay can be hard to quantify when researchers have informal knowledge of the data.
- The boundary varies by model, outcome, covariate correlation, and field norms.
- Partial blinding still improves transparency but should not be treated as equivalent to new-data prediction.

## Links

- [partial-blinding and incremental preregistration](../methods/partial_blinding_incremental_preregistration.md)
- [preexisting-data knowledge-provenance audit](../methods/preexisting_data_knowledge_provenance_audit.md)
- [prediction-postdiction boundary](prediction_postdiction_boundary.md)
- [preregistration evidence-strength caveat](preregistration_evidence_strength_caveat.md)
- [outcome-blind protocol amendment](../methods/outcome_blind_protocol_amendment.md)
- [preregistration and registered reports](preregistration_registered_reports.md)

## References

- Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114 [OpenAlex: W2779812635; Dimensions: pub.1101502429; SciSciNet: W2779812635; WoS: unknown]

## Metadata

- Concept ID: `longitudinal_partial_blinding_decay`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Nosek et al. (2018) (2018)
- Latest seen paper: Nosek et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1708274114`
- OpenAlex ID: `W2779812635`
- Dimensions ID: `pub.1101502429`
- SciSciNet ID: `W2779812635`
- Aliases: temporal blinding decay; longitudinal data preregistration leakage; partial-blinding temporal leakage; outcome inferability in panel preregistration
