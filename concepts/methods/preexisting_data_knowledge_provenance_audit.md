# Preexisting-data knowledge-provenance audit

## Summary

Preexisting-data knowledge-provenance audit records who has seen a dataset, what summaries are already known, and which outcomes could have shaped an analysis plan before preregistration.

## Canonical Form

- Unit of analysis: existing dataset, analyst, collaborator, prior result, data summary, preregistration, or analysis plan.
- Typical representation: provenance statement attached to a preregistration using already collected data.
- Method target: assess how much outcome knowledge could contaminate a nominally predictive analysis.
- Empirical signature: preregistration documents prior access, prior analyses, and blinding limits before committing to tests.

## Uses in Science of Science

- Specializes [partial-blinding and incremental preregistration](partial_blinding_incremental_preregistration.md) for preexisting datasets.
- Supports [preregistration adherence and deviation audits](../validations/preregistration_adherence_deviation_audit.md) by clarifying the starting information state.
- Helps interpret the [prediction-postdiction boundary](../validations/prediction_postdiction_boundary.md) when new data collection is not possible.
- Links preregistration practice to data-governance and analysis-provenance workflows.

## Operationalization

- Record whether the analyst has seen raw data, cleaned data, outcome summaries, labels, or previous reports.
- List which collaborators or external sources may have communicated outcome-relevant information.
- Describe what variables were blinded, transformed, held out, or unavailable before plan commitment.
- Attach the provenance statement to the preregistration and later manuscript.
- Treat analysis claims as more confirmatory when outcome knowledge was absent or tightly bounded.

## Evidence and Validations

- Verified full-text evidence from Nosek et al. (2018) discusses preregistration when data already exist and notes that researchers may have different levels of prior knowledge about the data.
- The paper recommends transparency about what information is known and using blinding or staged plans when possible.
- This motif turns the knowledge state before preregistration into an auditable object.

## Caveats

- Provenance statements can be incomplete if informal conversations or memory are not captured.
- Existing data can still support useful tests, but the strength of prediction claims depends on what was known before analysis.
- Blinding some variables may not prevent leakage through correlated variables.

## Links

- [partial-blinding and incremental preregistration](partial_blinding_incremental_preregistration.md)
- [preregistration adherence and deviation audit](../validations/preregistration_adherence_deviation_audit.md)
- [prediction-postdiction boundary](../validations/prediction_postdiction_boundary.md)
- [preregistration specificity gradient](../validations/preregistration_specificity_gradient.md)
- [preregistration and registered reports](../validations/preregistration_registered_reports.md)

## References

- Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114 [OpenAlex: W2779812635; Dimensions: pub.1101502429; SciSciNet: W2779812635; WoS: unknown]

## Metadata

- Concept ID: `preexisting_data_knowledge_provenance_audit`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Nosek et al. (2018) (2018)
- Latest seen paper: Nosek et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1708274114`
- OpenAlex ID: `W2779812635`
- Dimensions ID: `pub.1101502429`
- SciSciNet ID: `W2779812635`
- Aliases: preexisting-data preregistration audit; prior data-knowledge statement; analysis knowledge provenance; existing-data blinding audit
