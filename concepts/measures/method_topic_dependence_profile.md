# Method-topic dependence profile

## Summary

Method-topic dependence profile measures how strongly fields or classes rely on shared method-oriented topics.

## Canonical Form

- Unit of analysis: field, class, method topic, document-topic mixture, or class-topic cell.
- Typical representation: method-topic prevalence by class, enrichment ratio, or ranked class profile.
- Measurement target: cross-field dependence on shared methods rather than shared substantive objects.
- Empirical signature: method topics appear across multiple classes with class-specific prevalence gradients.

## Uses in Science of Science

- Extracts method dependence from [topic-class profile matrix](../representations/topic_class_profile_matrix.md) outputs.
- Complements [diagnostic topic ratio](diagnostic_topic_ratio.md) by focusing on method-oriented topics.
- Provides a text-based signal for [interdisciplinarity dimensions](interdisciplinarity_dimensions.md) when methods bridge otherwise distinct fields.
- Helps separate topical overlap due to common methods from overlap due to shared research objects or theories.

## Operationalization

- Fit a topic model and identify topics whose top words and example documents indicate methods.
- Estimate topic prevalence by field, class, or venue.
- Compute class-specific prevalence, enrichment, or dependence ratios for selected method topics.
- Inspect representative documents to ensure the topic is methodological rather than generic.
- Compare method-topic dependence with citation, collaboration, or instrument-use evidence when available.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) shows diagnostic topics that correspond to methods as well as substantive content.
- The PNAS class-topic matrix includes method-like topics and uses them to compare classes.
- The paper's discussion of off-diagonal structure makes it possible to treat shared method topics as signals of cross-class dependence.
- This measure is therefore a derived use of topic profiles, not a direct field classification.

## Caveats

- Topic models can merge methods with substantive domains, especially when methods are field-specific.
- Method prevalence can reflect writing style or abstract conventions rather than actual methodological dependence.
- Manual labeling of method topics should be recorded and, when possible, validated by experts or examples.

## Links

- [topic-class profile matrix](../representations/topic_class_profile_matrix.md)
- [diagnostic topic ratio](diagnostic_topic_ratio.md)
- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)
- [off-diagonal class-topic relationships](../representations/off_diagonal_class_topic_relationships.md)
- [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md)
- [topic semantic artifact caveat](../validations/topic_semantic_artifact_caveat.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `method_topic_dependence_profile`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: method-topic prevalence; methodological topic profile; shared method topic dependence; method enrichment by field
