# Small-category topic-profile instability

## Summary

Small-category topic-profile instability flags class-topic summaries as unreliable when few documents make average topic profiles noisy or overly generic.

## Canonical Form

- Unit of analysis: class, category, topic profile, document count, or class-topic matrix row.
- Typical representation: minimum sample-size rule, confidence interval, omitted category flag, or instability note.
- Validation target: whether class-level topic profiles are stable enough for interpretation.
- Empirical signature: small categories produce generic, weak, or idiosyncratic diagnostic topics.

## Uses in Science of Science

- Qualifies interpretations of [topic-class profile matrix](../representations/topic_class_profile_matrix.md).
- Adds a sample-size guardrail to [diagnostic topic-class alignment](diagnostic_topic_class_alignment.md).
- Connects class-level topic interpretation to [minimum per-cell sample size guardrail](../methods/minimum_per_cell_sample_size_guardrail.md).
- Helps prevent [topic semantic artifact caveat](topic_semantic_artifact_caveat.md) from being mistaken for a field property.

## Operationalization

- Record the number of documents in each class or field.
- Set a minimum class size or report uncertainty for class-topic averages.
- Compare small-category topic profiles with bootstrapped or resampled profiles when possible.
- Suppress, pool, or caveat categories whose profiles are unstable.
- Inspect whether generic topics dominate small categories.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) discusses limitations in interpreting topics for small PNAS categories.
- The paper notes that small class sizes can make diagnostic topics less reliable or less specific.
- This caveat directly affects how class-topic heat maps should be read.
- It also motivates reporting category sizes alongside topic-profile summaries.

## Caveats

- Large categories can also be unstable if they are heterogeneous.
- Pooling small categories can hide precisely the emerging fields of interest.
- Sample-size rules should be paired with substantive inspection rather than applied mechanically.

## Links

- [topic-class profile matrix](../representations/topic_class_profile_matrix.md)
- [diagnostic topic-class alignment](diagnostic_topic_class_alignment.md)
- [topic semantic artifact caveat](topic_semantic_artifact_caveat.md)
- [minimum per-cell sample size guardrail](../methods/minimum_per_cell_sample_size_guardrail.md)
- [off-diagonal class-topic relationships](../representations/off_diagonal_class_topic_relationships.md)
- [field classifications](../measures/field_classifications.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `small_category_topic_profile_instability`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: small-class topic instability; sparse category topic profile; low-count class-topic caveat; category-size topic guardrail
