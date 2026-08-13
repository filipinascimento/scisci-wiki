# Database and method textual-acknowledgment gap

## Summary

Database and method textual-acknowledgment gap is the validation caveat that database, tool, and method papers may be formally cited while the text credits only a broader concept, making the specific infrastructure contribution less visible.

## Canonical Form

- Unit of analysis: database paper, tool paper, method paper, citation context, textual mention, hidden citation, or general concept label.
- Typical representation: cited-but-not-mentioned count, tool-name mention rate, dataset-name mention rate, concept-only citation context, and source-type comparison.
- Validation target: identify when citation counts overstate recognition of a specific infrastructure contribution or understate the uncredited use of the supporting work.
- Empirical signature: papers cite a dataset or method article while discussing the surrounding concept, not the database, package, survey, or implementation effort itself.

## Uses in Science of Science

- Adds an infrastructure-specific caveat to [hidden citations](../measures/hidden_citations.md), [citation context windows](../representations/citation_context_windows.md), and [citation impact indicators](../measures/citation_impact_indicators.md).
- Helps evaluate data resources such as [scholarly data lakes](../datasets/scholarly_data_lakes.md), [Dimensions publication data spine](../datasets/dimensions_publication_data_spine.md), and [OpenAlex](../datasets/openalex.md).
- Connects credit allocation to [research-ready table curation](../methods/research_ready_table_curation.md), software/data citation norms, and [responsible metrics](../measures/responsible_metrics.md).
- Flags a possible mismatch between formal reference-list credit and prose-level recognition of methodological labor.

## Operationalization

- For cited database, method, and tool papers, compare reference-list citations with explicit textual mentions of the dataset, tool, survey, package, or method name.
- Separate citations made for a general concept from citations that acknowledge the specific infrastructure contribution.
- Audit whether hidden-citation workflows treat cited-but-not-mentioned infrastructure papers differently from conceptual discoveries.
- Report examples and denominator choices because method papers often support both a general concept and a specific reusable artifact.

## Evidence and Validations

- Verified full-text evidence from Meng, Varol, and Barabasi (2024) states that papers introducing databases or tools can show different text/citation behavior than conceptual discoveries.
- The paper notes that papers may cite database or tool foundations while failing to mention the database, package, survey, or methodological effort in the text.
- Meng et al. interpret this as a textual bias: when infrastructure papers play a supportive role for a general concept, their specific contributions can lose visible acknowledgment.
- This caveat is distinct from ordinary hidden citations because the paper can be formally cited but still not textually credited for the infrastructure contribution being reused.

## Caveats

- A citation to a database or method paper can legitimately support a broader concept, not only the artifact itself.
- Textual mention rates depend on naming conventions, author style, venue constraints, and whether the artifact has a stable short name.
- Infrastructure credit should combine citation counts, prose context, usage logs, and domain norms when possible.

## Links

- [hidden citations](../measures/hidden_citations.md)
- [citation context windows](../representations/citation_context_windows.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md)
- [community-assigned catchphrases](../mechanisms/community_assigned_catchphrases.md)
- [scholarly data lakes](../datasets/scholarly_data_lakes.md)
- [Dimensions publication data spine](../datasets/dimensions_publication_data_spine.md)
- [OpenAlex](../datasets/openalex.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]

## Metadata

- Concept ID: `database_method_textual_acknowledgment_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Dimensions ID: `pub.1171389234`
- SciSciNet ID: `W4396694003`
- Aliases: method acknowledgment gap; database textual credit gap; cited-but-not-mentioned infrastructure; tool-paper acknowledgment bias
