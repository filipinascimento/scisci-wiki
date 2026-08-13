# USPTO disclosure-duty science-reliance assumption

## Summary

USPTO disclosure-duty science-reliance assumption treats applicant-side scientific non-patent references as a relatively informative trace of inventor reliance because U.S. patent rules require applicants to disclose known prior art.

## Canonical Form

- Unit of analysis: patent jurisdiction, non-patent reference, patent-paper citation, applicant citation, or examiner citation.
- Typical representation: jurisdictional assumption, source-role flag, or validation caveat for patent-paper links.
- Validation target: whether patent citations to science plausibly trace inventor knowledge use rather than only examiner search.
- Empirical signature: a patent regime makes applicant disclosure salient enough that front-page scientific references can be interpreted as partial evidence of technological reliance on science.

## Uses in Science of Science

- Qualifies [patent citation source roles](patent_citation_source_roles.md) when interpreting applicant, examiner, and unknown source flags.
- Links the legal source of patent references to [scientific non-patent references](../datasets/scientific_non_patent_references.md).
- Adds a jurisdictional assumption to [front-page patent-reference scope](front_page_patent_reference_scope.md).
- Helps separate [patent-to-patent citation noise](patent_to_patent_citation_noise.md) from science-reference evidence.

## Operationalization

- Record the patent office and legal disclosure regime for the patent corpus.
- Preserve applicant, examiner, and unknown source-role flags where available.
- Interpret science references as reliance evidence only after checking whether applicants had disclosure duties.
- Compare applicant-only and all-source patent-paper citation results.
- Report jurisdiction limits before transferring the assumption to WIPO, EPO, or other systems.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) motivates the USPTO focus using the U.S. duty to disclose prior art.
- The paper argues that USPTO references may be more complete and representative for inventor-side knowledge use than regimes where examiners carry more prior-art search burden.
- This assumption supports the use of U.S. patent citations to science as a science-reliance signal, while preserving source-role caveats.
- The paper still treats patent-paper links as noisy evidence, not direct proof of causal knowledge transfer.

## Caveats

- Disclosure duties do not guarantee complete reporting of all scientific influences.
- Applicant-side references can include legally strategic or attorney-added citations.
- Jurisdictional assumptions should not be silently exported to patent systems with different examination and disclosure rules.

## Links

- [patent citation source roles](patent_citation_source_roles.md)
- [front-page patent-reference scope](front_page_patent_reference_scope.md)
- [patent-to-patent citation noise](patent_to_patent_citation_noise.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [patent reference raw-string provenance](../representations/patent_reference_raw_string_provenance.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `uspto_disclosure_duty_science_reliance_assumption`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: USPTO science-reliance assumption; applicant disclosure duty caveat; patent disclosure reliance assumption; U.S. patent science-reference assumption
